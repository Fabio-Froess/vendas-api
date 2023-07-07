import { Injectable } from '@nestjs/common';
import { CreateItemVendaDto } from './dto/create-item-venda.dto';
import { UpdateItemVendaDto } from './dto/update-item-venda.dto';
import { ItemVendaRepository } from './repositories/itemVenda.repository';

@Injectable()
export class ItemVendaService {
  constructor(private readonly repository: ItemVendaRepository) {}

  create(createItemVendaDto: CreateItemVendaDto) {
    return this.repository.create(createItemVendaDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateItemVendaDto: UpdateItemVendaDto) {
    return this.repository.update(id, updateItemVendaDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
