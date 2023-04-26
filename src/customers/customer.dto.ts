// create-customer.dto.ts
export class CreateCustomerDto {
    customer_id:number;
    store_id: number;
    profile: string;
    first_name: string;
    last_name: string;
    email: string;
    address_id: number;
    // create_date: Date;
    // last_update: Date;
  }
  
  // update-customer.dto.ts
  export class UpdateCustomerDto {
    customer_id:number;
    store_id?: number;
    profile?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    address_id?: number;
    // create_date?: Date;
    // last_update?: Date;
  }
  