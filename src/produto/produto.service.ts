import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutoRepository } from './repositories/produto.repository';

@Injectable()
export class ProdutoService {
  constructor(private readonly repository: ProdutoRepository) {}

  create(createProdutoDto: CreateProdutoDto) {
    return this.repository.create(createProdutoDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.repository.update(id, updateProdutoDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
