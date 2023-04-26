import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from './customers/customer.entity';
// import { Address } from './customers/address.entity';
// import { City } from './customers/City.entity';
// import { Country } from './customers/country.entity';
@Module({
  imports: [
    CustomersModule,
TypeOrmModule.forRoot({
  type:'mysql',
  username:'root',
  host:'localhost',
  port:3306,
  password:'Nellore@123',
  database:'sakila',
  entities:[Customers],
  autoLoadEntities:true,
  synchronize:true,

})
  ]
})
export class AppModule {}
