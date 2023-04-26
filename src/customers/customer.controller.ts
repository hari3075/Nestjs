import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CustomersService } from './customer.service';
import { CreateCustomerDto } from './customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Get(':customer_id')
  findOne(@Param('customer_id', ParseIntPipe) customer_id: number) {
    return this.customersService.findOne(customer_id);
  }

//   @Patch(':id')
//   update(@Param('id', ParseIntPipe) id: number, @Body() updateCustomerDto: UpdateCustomerDto) {
//     return this.customersService.update(id, updateCustomerDto);
//   }

  @Delete(':customer_id')
  remove(@Param('customer_id', ParseIntPipe) id: number) {
    return this.customersService.remove(id);
  }
}
