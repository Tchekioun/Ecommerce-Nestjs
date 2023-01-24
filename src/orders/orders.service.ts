import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}
  async create(createOrderDto: CreateOrderDto) {
    const { first_name, last_name } = await createOrderDto.customer;
    const { total_price, total_quantity } = await createOrderDto.order;
    const order_tracking_number = 'test';
    return await this.prismaService.customer.create({
      data: {
        first_name,
        last_name,
        orders: {
          create: [
            {
              total_price,
              total_quantity,
              order_tracking_number,
              address: {
                create: [
                  createOrderDto.billingAddress,
                  createOrderDto.shippingAddress,
                ],
              },
              orderItems: { create: [{createOrderDto.orderItems}] },
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
