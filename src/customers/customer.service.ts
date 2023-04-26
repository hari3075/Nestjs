import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customers } from './customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from './customer.dto';

@Injectable()
export class CustomersService {
  constructor(@InjectRepository(Customers) private readonly customersRepository: Repository<Customers>) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const customer = this.customersRepository.create(createCustomerDto);
    return this.customersRepository.save(customer);
  }

//   async findAll() {
//     return this.customersRepository.find();
//   }

//   async findOne(customer_id: any) {
//     return this.customersRepository.findOne(customer_id);
//   }
async findOne(id: number) {
    return this.customersRepository.findOne({ where: { customer_id: id } });
  }

  async update(customer_id: any, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customersRepository.findOne(customer_id);
    this.customersRepository.merge(customer, updateCustomerDto);
    return this.customersRepository.save(customer);
  }

  async remove(customer_id: any) {
    const customer = await this.customersRepository.findOne(customer_id);
    return this.customersRepository.remove(customer);
  }
}
