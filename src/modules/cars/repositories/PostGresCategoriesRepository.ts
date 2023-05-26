import { Category } from "../entities/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostGresCategoriesRepository implements ICategoriesRepository {
    findByName(name: string): Category {
        return null;
    }
    list(): Category[] {
        return null;
    }
    create({ name, description }: ICreateCategoryDTO): void {}
}

export { PostGresCategoriesRepository };
