import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [ConfigModule.forRoot(), ClienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
