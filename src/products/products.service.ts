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

  async findAll() {
    const products = await this.prismaService.product.findMany();
    return products;
  }
  findByNameContaining(searchString) {
    return this.prismaService.product.findMany({
      where: { name: { contains: searchString, mode: 'insensitive' } },
    });
  }

  findOne(id: number) {
    return this.prismaService.product.findUnique({ where: { id } });
  }
  async findByCategoryId(
    categoryId: number,
    page: number,
    size: number,
    searchString,
  ) {
    const total = await this.prismaService.product.count({
      where: {
        categoryId,
        AND: [{ name: { contains: searchString, mode: 'insensitive' } }],
      },
    });
    const skip = (page - 1) * size;
    const take = size;
    const products = await this.prismaService.product.findMany({
      where: {
        categoryId,
        AND: [{ name: { contains: searchString, mode: 'insensitive' } }],
      },
      skip: skip,
      take: take,
    });

    return {
      page: {
        theTotalElements: total,
        thePageNumber: page,
        thePageSize: take,
      },
      products: products,
    };
  }

  update(id: number, data: Prisma.ProductUpdateInput) {
    return this.prismaService.product.update({ where: { id }, data: data });
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
