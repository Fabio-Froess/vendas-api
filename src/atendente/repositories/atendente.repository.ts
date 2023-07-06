import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAtendenteDto } from '../dto/create-atendente.dto';
import { UpdateAtendenteDto } from '../dto/update-atendente.dto';
import { AtendenteEntity } from '../entities/atendente.entity';

@Injectable()
export class AtendenteRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createAtendenteDto: CreateAtendenteDto,
  ): Promise<AtendenteEntity> {
    return this.prisma.atendente.create({
      data: createAtendenteDto,
    });
  }

  async findAll(): Promise<AtendenteEntity[]> {
    return this.prisma.atendente.findMany();
  }

  async findOne(id: number): Promise<AtendenteEntity> {
    return this.prisma.atendente.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateAtendenteDto: UpdateAtendenteDto,
  ): Promise<AtendenteEntity> {
    return this.prisma.atendente.update({
      where: {
        id,
      },
      data: updateAtendenteDto,
    });
  }

  async remove(id: number): Promise<AtendenteEntity> {
    return this.prisma.atendente.delete({
      where: {
        id,
      },
    });
  }
}
