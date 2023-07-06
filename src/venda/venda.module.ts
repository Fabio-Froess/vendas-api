import { Module } from '@nestjs/common';
import { VendaService } from './venda.service';
import { VendaController } from './venda.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { VendaRepository } from './repositories/venda.repository';

@Module({
  controllers: [VendaController],
  providers: [VendaService, PrismaService, VendaRepository],
})
export class VendaModule {}
