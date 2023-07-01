import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { AppError } from "../../../../errors/AppError";
import { IDateProvider } from "../../../../shared/container/providers/DaysjsProvider/IDateProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUsersTokensRepository } from "../../repositories/IUsersTokensRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
    refresh_token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private UsersRepository: IUsersRepository,
        @inject("UsersTokensRepository")
        private UsersTokensRepository: IUsersTokensRepository,
        @inject("DayjsDateProvider")
        private dayJsDateProvider: IDateProvider
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.UsersRepository.findByEmail(email);
        const {
            secret_refresh_token,
            secret,
            expires_refresh_token_days,
            expires_in_refresh_token,
        } = auth;

        if (!user) {
            throw new AppError("Email or password incorrect", 401);
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Email or password incorrect", 401);
        }

        const token = sign({}, secret, {
            subject: user.id,
            expiresIn: auth.expiresInToken,
        });

        const refresh_token = sign({ email }, secret_refresh_token, {
            subject: user.id,
            expiresIn: expires_in_refresh_token,
        });

        const refresh_token_expires_date = this.dayJsDateProvider.addDays(
            expires_refresh_token_days
        );

        await this.UsersTokensRepository.create({
            user_id: user.id,
            refresh_token,
            expires_date: refresh_token_expires_date,
        });

        const tokerReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
            refresh_token,
        };

        return tokerReturn;
    }
}

export { AuthenticateUserUseCase };
