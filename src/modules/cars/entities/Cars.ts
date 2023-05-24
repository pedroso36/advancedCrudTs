import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Category } from "./Category";

@Entity("cars")
class Cars {
    @PrimaryColumn()
    id?: string;

    @Column()
    model: string;

    @Column()
    description: string;

    @Column()
    available: boolean;

    @Column()
    license_plate: string;

    @Column()
    brand: string;

    @OneToMany(() => Category, (category) => category.cars)
    category: Category[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Cars };
