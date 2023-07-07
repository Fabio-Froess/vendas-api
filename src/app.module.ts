import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ClienteModule } from './cliente/cliente.module';
import { AtendenteModule } from './atendente/atendente.module';
import { VendaModule } from './venda/venda.module';
import { ItemVendaModule } from './item-venda/item-venda.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [ConfigModule.forRoot(), ClienteModule, AtendenteModule, VendaModule, ItemVendaModule, ProdutoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
