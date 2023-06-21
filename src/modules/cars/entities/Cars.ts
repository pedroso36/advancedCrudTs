import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

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
