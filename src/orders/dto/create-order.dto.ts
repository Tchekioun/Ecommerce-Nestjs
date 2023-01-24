import { BillingAddressDto } from './billingAddress.dto';
import { CustomerDto } from './customer.dto';
import { OrderItemsDto } from './orderItems.dto';
import { ShippingAddressDto } from './shippingAddress.dto';

export class CreateOrderDto {
  customer: CustomerDto;
  shippingAddress: ShippingAddressDto;
  billingAddress: BillingAddressDto;
  order: {
    total_price: number;
    total_quantity: number;
  };
  orderItems: OrderItemsDto[];
}
