import { Module } from '@nestjs/common';
import { ItemVendaService } from './item-venda.service';
import { ItemVendaController } from './item-venda.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ItemVendaRepository } from './repositories/itemVenda.repository';

@Module({
  controllers: [ItemVendaController],
  providers: [ItemVendaService, PrismaService, ItemVendaRepository],
})
export class ItemVendaModule {}
