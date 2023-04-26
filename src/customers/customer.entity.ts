import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// ManyToOne, JoinColumn
// import { Address } from './address.entity';
@Entity()
export class Customers {
    @PrimaryGeneratedColumn()
    customer_id: number;
    @Column()
    store_id: number;
    @Column()
    profile: string;
    @Column()
    first_name: string;
    @Column()
    last_name: string;
    @Column()
    email: string;
    @Column()
    address_id: number;
    // @Column()
    // profile_doc: any;
//     @Column()
//     create_date: Date;
//     @Column()
//   last_update: Date;
}