import { City } from "src/city/city.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";

// import { City } from './city.entity';

@Entity()
export class Country {
 @PrimaryGeneratedColumn()
     country_id: number
    //   @Column()
    //   country: string;
      @OneToMany(() => City, city => city.country)
cities: City[];
@Column({ type: 'datetime', nullable: true })
updated_at: Date;

}