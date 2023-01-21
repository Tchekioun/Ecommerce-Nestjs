import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CountriesService {
  constructor(private prismaService: PrismaService) {}
  findAll() {
    return this.prismaService.country.findMany();
  }

  findCountryStates(id: number) {
    return this.prismaService.state.findMany({ where: { country_id: id } });
  }
}
