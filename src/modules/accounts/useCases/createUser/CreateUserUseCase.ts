import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateUsersDTO } from "../../dtos/ICreateuserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        name,
        email,
        password,
        driver_license,
    }: ICreateUsersDTO): Promise<void> {
        await this.usersRepository.create({
            name,
            email,
            password,
            driver_license,
        });
    }
}

export { CreateUserUseCase };
