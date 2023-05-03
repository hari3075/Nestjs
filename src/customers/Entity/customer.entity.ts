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
    // @Column()
    // profile:Blob;
    @Column()
    first_name: string;
    @Column()
    last_name: string;
    @Column()
    email: string;
    // @Column()
    // address_id:number;
    @ManyToOne(() => Address, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'address_id' })
    address: Address;
    // @Column()
  //   @Column({ type: 'datetime'nullable: true })
  // created_date: Date;
  // @Column({ type: 'datetime', nullable: true })
  // updated_date: Date;
  @Column({ type: 'datetime', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
created_date: Date;

@Column({ type: 'datetime', nullable: true, default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
updated_date: Date;

}

