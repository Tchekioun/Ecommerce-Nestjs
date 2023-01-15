import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}
  create(data: Prisma.ProductCreateInput) {
    return this.prismaService.product.create({ data: data });
  }

  findAll() {
    return this.prismaService.product.findMany();
  }

  findOne(id: number) {
    return this.prismaService.product.findUnique({ where: { id } });
  }
  findByCategoryId(category_id: number) {
    return this.prismaService.product.findMany({ where: { category_id } });
  }

  update(id: number, data: Prisma.ProductUpdateInput) {
    return this.prismaService.product.update({ where: { id }, data: data });
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
