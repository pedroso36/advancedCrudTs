import { ICreateUsersDTO } from "../../dtos/ICreateuserDTO";
import { IUserRepository } from "../IUsersRepository";

class UsersRepository implements IUserRepository {
    create(data: ICreateUsersDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export { UsersRepository };
