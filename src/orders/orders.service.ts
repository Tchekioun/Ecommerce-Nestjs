import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 } from 'uuid';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}
  async create(createOrderDto: CreateOrderDto) {
    const orderTrackingNumber = await v4();
    const createPurchase = await this.prismaService.customer.create({
      data: {
        ...createOrderDto.customer,
        orders: {
          create: [
            {
              ...createOrderDto.order,
              orderTrackingNumber,
              shipping_relation: { create: createOrderDto.billingAddress },
              billing_relation: { create: createOrderDto.shippingAddress },
              orderItems: {
                create: createOrderDto.orderItem,
              },
            },
          ],
        },
      },
    });
    if (createPurchase) return { orderTrackingNumber: orderTrackingNumber };
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
