import { Injectable } from '@nestjs/common';
import { CreateVendaDto } from './dto/create-venda.dto';
import { UpdateVendaDto } from './dto/update-venda.dto';
import { VendaRepository } from './repositories/venda.repository';

@Injectable()
export class VendaService {
  constructor(private readonly repository: VendaRepository) {}

  create(createVendaDto: CreateVendaDto) {
    return this.repository.create(createVendaDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateVendaDto: UpdateVendaDto) {
    return this.repository.update(id, updateVendaDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
