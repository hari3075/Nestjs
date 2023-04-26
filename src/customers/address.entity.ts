// import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
// import { Customers } from "./customer.entity";
// import { City } from './City.entity';

// @Entity()

// export class Address {
//     @PrimaryGeneratedColumn()
//     address_id: number;
//     @Column()
//     address: string;
//     @Column()
//     distic: string;
//     @OneToMany(() => Customers, customers => customers.address)
//     customers: Customers[];
//     @ManyToOne(() => City, city => city.addresses)
//     @JoinColumn({ name: "city_id" })
//     city: City;
// }