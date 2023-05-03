// // import { Module } from '@nestjs/common';
// // import { TypeOrmModule } from '@nestjs/typeorm';
// // import { Customers } from './customer.entity';
// // import { CustomerController } from './customer.controller';
// // import { CustomersService } from './customer.service';

// // @Module({
// //     imports: [TypeOrmModule.forFeature([Customers])],
// //     controllers: [CustomerController],
// //     providers: [CustomersService],
// // })
// // export class AppModule {}
// import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
// import { Customers } from './customers.entity';
// import { CustomersService } from './customers.service';

// @Controller('customers')
// export class CustomersController {
//   constructor(private readonly customersService: CustomersService) {}

//   @Get(':id')
//   async findOne(@Param('id', ParseIntPipe) id: number): Promise<Customers> {
//     return this.customersService.findOne(id);
//   }

//   @Post()
//   async create(@Body() createCustomersDto: Customers): Promise<Customers> {
//     return this.customersService.create(createCustomersDto);
//   }

//   @Patch(':id')
//   async update(
//     @Param('id', ParseIntPipe) id: number,
//     @Body() updateCustomersDto: Customers,
//   ): Promise<Customers> {
//     return this.customersService.update(id, updateCustomersDto);
//   }

//   @Delete(':id')
//   async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
//     return this.customersService.remove(id);
//   }
// }
