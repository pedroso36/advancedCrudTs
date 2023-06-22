import { ICreateUsersDTO } from "../dtos/ICreateuserDTO";

interface IUserRepository {
    create(data: ICreateUsersDTO): Promise<void>;
}

export { IUserRepository };
