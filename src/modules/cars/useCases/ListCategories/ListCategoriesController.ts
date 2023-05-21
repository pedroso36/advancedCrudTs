import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private ListCategoriesUseCase: ListCategoriesUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.ListCategoriesUseCase.execute();
        if (all.length === 0) {
            return response
                .status(404)
                .json({ error: "Categories not found!" });
        }
        return response.json({ all });
    }
}

export { ListCategoriesController };
