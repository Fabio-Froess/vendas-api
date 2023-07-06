import { Module } from '@nestjs/common';
import { AtendenteService } from './atendente.service';
import { AtendenteController } from './atendente.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AtendenteRepository } from './repositories/atendente.repository';

@Module({
  controllers: [AtendenteController],
  providers: [AtendenteService, PrismaService, AtendenteRepository],
})
export class AtendenteModule {}
