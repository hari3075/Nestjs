// import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
// import { Address } from "./address.entity";
// import { Country } from "./country.entity";
// @Entity()
// export class City {
// @PrimaryGeneratedColumn()
// city_id: number;
//  @Column()
// city: string;
//  @OneToMany(() => Address, address => address.city)
//  addresses: Address[];
// @ManyToOne(() => Country, country => country.cities)
// @JoinColumn({ name: "country_id" })
// country: Country;
// }