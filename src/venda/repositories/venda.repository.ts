import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVendaDto } from '../dto/create-venda.dto';
import { UpdateVendaDto } from '../dto/update-venda.dto';
import { VendaEntity } from '../entities/venda.entity';

@Injectable()
export class VendaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createVendaDto: CreateVendaDto): Promise<VendaEntity> {
    return this.prisma.venda.create({
      data: createVendaDto,
    });
  }

  async findAll(): Promise<VendaEntity[]> {
    return this.prisma.venda.findMany();
  }

  async findOne(id: number): Promise<VendaEntity> {
    return this.prisma.venda.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateVendaDto: UpdateVendaDto,
  ): Promise<VendaEntity> {
    return this.prisma.venda.update({
      where: {
        id,
      },
      data: updateVendaDto,
    });
  }

  async remove(id: number): Promise<VendaEntity> {
    return this.prisma.venda.delete({
      where: {
        id,
      },
    });
  }
}
