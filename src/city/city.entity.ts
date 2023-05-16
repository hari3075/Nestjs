import { Address } from "src/address/address.entity";
import { Country } from "src/country/country.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
// import { Address } from "./address.entity";
// import { Country } from "./country.entity";
@Entity()
export class City {
@PrimaryGeneratedColumn()
city_id: number;
 @Column()
city: string;
@OneToMany(() => Address, address => address.city)
addresses: Address[];

// @Column()
// country_id: any;
// @Column()
@ManyToOne(() => Country)
@JoinColumn({ name: 'country_id' })
country: Country;
@Column({ type: 'datetime', nullable: true })
updated_at: Date;
}