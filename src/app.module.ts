import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customers/Entity/customer.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Address } from './address/address.entity';
import { City } from './city/city.entity';
import { Country } from './country/country.entity';
@Module({
  imports: [
   
TypeOrmModule.forRoot({
  type:'mysql',
  username:'root',
  host:'localhost',
  port:3306,
  password:'Nellore@123',
  database:'sakila2',
  entities:[Customer,Address,City,Country],
  autoLoadEntities:true,
  synchronize:true,

}),
CustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}


