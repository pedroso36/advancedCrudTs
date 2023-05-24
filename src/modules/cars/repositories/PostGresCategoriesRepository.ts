import { Category } from "../entities/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostGresCategoriesRepository implements ICategoriesRepository {
    findByName(name: string): Category {
        console.log(name);
        return null;
    }
    list(): Category[] {
        return null;
    }
    create({ name, description }: ICreateCategoryDTO): void {
        console.log(name, description);
    }
}

export { PostGresCategoriesRepository };
