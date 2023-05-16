import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post,Put } from '@nestjs/common';
import { Customer } from '../Entity/customer.entity';
import { CustomersService } from '../Service/customer.service';
// import { UpdateCustomerDto } from '../Dto/customer.dto';
// import { CreateCustomerDto } from '../Dto/createcustomer.dto';
@Controller('customer')

export class CustomersController {
  CustomersRepository: any;
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  async findAll(): Promise<Customer[]> {

     return this.customersService.findAll();
    
    }
  
  @Get(':customer_id')
  async readUser(@Param('customer_id') customer_id: number) {
    const data =  await this.customersService.read(customer_id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }
  
  @Post()
  async create(@Body() customer: Customer): Promise<Customer> {
    return this.customersService.create(customer);
  }
  @Put(':customer_id')
  async update (@Param('customer_id') customer_id: number, @Body() customer: Customer): Promise<any> {
    return this.customersService.update(customer_id, customer);
  }

 
 
  @Delete(':customer_id')
  async remove(@Param('customer_id', ParseIntPipe) customer_id: number): Promise<void> {
    return this.customersService.remove(customer_id);
  }
}
