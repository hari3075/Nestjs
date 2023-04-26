import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from './customer.entity';
import { CustomersController } from './customer.controller';
import { CustomersService } from './customer.service';

@Module({
    imports: [TypeOrmModule.forFeature([Customers])],
    controllers: [CustomersController],
    providers: [CustomersService],
})
export class AppModule {}
