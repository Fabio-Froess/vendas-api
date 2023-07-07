import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemVendaDto } from '../dto/create-item-venda.dto';
import { UpdateItemVendaDto } from '../dto/update-item-venda.dto';
import { ItemVendaEntity } from '../entities/item-venda.entity';

@Injectable()
export class ItemVendaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createItemVendaDto: CreateItemVendaDto,
  ): Promise<ItemVendaEntity> {
    return this.prisma.itemVenda.create({
      data: createItemVendaDto,
    });
  }

  async findAll(): Promise<ItemVendaEntity[]> {
    return this.prisma.itemVenda.findMany();
  }

  async findOne(id: number): Promise<ItemVendaEntity> {
    return this.prisma.itemVenda.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateItemVendaDto: UpdateItemVendaDto,
  ): Promise<ItemVendaEntity> {
    return this.prisma.itemVenda.update({
      where: {
        id,
      },
      data: updateItemVendaDto,
    });
  }

  async remove(id: number): Promise<ItemVendaEntity> {
    return this.prisma.itemVenda.delete({
      where: {
        id,
      },
    });
  }
}
