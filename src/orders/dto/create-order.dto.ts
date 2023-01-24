import { BillingAddressDto } from './billingAddress.dto';
import { CustomerDto } from './customer.dto';
import { OrderDto } from './order-head.dto';
import { OrderItemsDto } from './orderItems.dto';
import { ShippingAddressDto } from './shippingAddress.dto';

export class CreateOrderDto {
  customer: CustomerDto;
  shippingAddress: ShippingAddressDto;
  billingAddress: BillingAddressDto;
  order: OrderDto;
  orderItems: OrderItemsDto[];
}
