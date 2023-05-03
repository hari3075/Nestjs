import { Address } from "src/address/address.entity";
import { Column, Entity, IsNull, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
// ManyToOne, JoinColumn
// import { Address } from './address.entity';
@Entity()
export class Customer {
        @PrimaryGeneratedColumn()
    customer_id: number;
    @Column()
    store_id: number;
    @Column()
    first_name: string;
    @Column()
    last_name: string;
    @Column()
    email: string;
    @Column()
    address_id:number;
    // @ManyToOne(() => Address)
    // @JoinColumn({ name: 'address_id' })
    // address: Address;
    @Column()
    @Column({ type: 'datetime', nullable: true })
  create_date: Date;
  @Column({ type: 'datetime', nullable: true })
  last_update: Date;
}

