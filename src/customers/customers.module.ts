import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './Entity/customer.entity';
import { Address } from 'src/address/address.entity';
import { City } from 'src/city/city.entity';
import { Country } from 'src/country/country.entity';
import { CustomersController } from '../customers/Controller/customer.controller';
import { CustomersService } from './Service/customer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer,Address,City,Country])],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
