import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 } from 'uuid';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}
  async create(createOrderDto: CreateOrderDto) {
    const order_tracking_number = await v4();
    const createPurchase = await this.prismaService.customer.create({
      data: {
        ...createOrderDto.customer,
        orders: {
          create: [
            {
              ...createOrderDto.order,
              order_tracking_number,
              shipping_relation: { create: createOrderDto.billingAddress },
              billing_relation: { create: createOrderDto.shippingAddress },
              orderItems: {
                create: createOrderDto.orderItems,
              },
            },
          ],
        },
      },
    });
    if (createPurchase) return { orderTrackingNumber: order_tracking_number };
  }
  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
