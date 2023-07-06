import { Module } from '@nestjs/common';
import { ItemVendaService } from './item-venda.service';
import { ItemVendaController } from './item-venda.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ItemVendaController],
  providers: [ItemVendaService, PrismaService],
})
export class ItemVendaModule {}
