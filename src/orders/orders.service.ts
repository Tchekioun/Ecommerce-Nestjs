import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}
  async create(createOrderDto: CreateOrderDto) {
    const order_tracking_number = 'test';
    return await this.prismaService.customer.create({
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
