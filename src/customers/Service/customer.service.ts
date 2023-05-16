import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../Entity/customer.entity';
import { UpdateCustomerDto } from '../Dto/customer.dto';
import { CreateCustomerDto } from '../Dto/createcustomer.dto';
@Injectable()
export class CustomersService {
  createUser(createUserDto: CreateCustomerDto) {
    throw new Error('Method not implemented.');
  }
  findOne: any;
  constructor(
    @InjectRepository(Customer)
    private readonly customersRepository: Repository<Customer>,
  ) {}
  async findAll(): Promise<Customer[]> {

    return this.customersRepository.find();
    
   }
 
  async read(customer_id: number) {
    return await this.customersRepository.findOne({ where: { customer_id: customer_id } });
  }

  async create(customer: Partial<Customer>): Promise<Customer> {
    const newcustomer = this.customersRepository.create(customer);
    return this.customersRepository.save(newcustomer);
  }

  async update(customer_id: number, customer: Partial<Customer>): Promise<Customer> {
    await this.customersRepository.update(customer_id, customer);
    return this.customersRepository.findOne({ where: { customer_id } });
  }
 

 

  async remove(customer_id: number): Promise<void> {
    await this.customersRepository.delete(customer_id);
  }
}
