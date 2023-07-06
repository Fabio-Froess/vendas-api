import { Injectable } from '@nestjs/common';
import { CreateAtendenteDto } from './dto/create-atendente.dto';
import { UpdateAtendenteDto } from './dto/update-atendente.dto';
import { AtendenteRepository } from './repositories/atendente.repository';

@Injectable()
export class AtendenteService {
  constructor(private readonly repository: AtendenteRepository) {}

  create(createAtendenteDto: CreateAtendenteDto) {
    return this.repository.create(createAtendenteDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateAtendenteDto: UpdateAtendenteDto) {
    return this.repository.update(id, updateAtendenteDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
