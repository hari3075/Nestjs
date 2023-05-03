import { City } from "src/city/city.entity";
import { Customer } from "src/customers/Entity/customer.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
// import { Customers } from "./customer.entity";
// import { City } from './City.entity';

@Entity()

export class Address {
    @PrimaryGeneratedColumn()
    address_id: number;
    @Column()
    address: string;
//  @OneToMany(() => Customer, customer => customer.address)
// customers: Customer[];
    @Column()
    address2:string;
    @Column()
    distic: string;
    //  @Column()   
    // city_id: string;
    @ManyToOne(() => City)
@JoinColumn({ name: 'city_id' })
city: City;
    @Column()
    postal_code:string;
    @Column({ type: 'datetime', nullable: true })
    updated_at: Date;
}