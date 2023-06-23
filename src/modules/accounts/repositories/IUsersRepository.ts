import { ICreateUsersDTO } from "../dtos/ICreateuserDTO";

interface IUsersRepository {
    create(data: ICreateUsersDTO): Promise<void>;
}

export { IUsersRepository };
