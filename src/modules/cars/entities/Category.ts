import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Cars } from "./Cars";

@Entity("categories")
class Category {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => Cars, (cars) => cars.category)
    cars: Cars;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Category };
