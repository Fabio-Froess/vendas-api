import { IsNumber } from 'class-validator';

export class CreateItemVendaDto {
  @IsNumber()
  quantidade: number;

  //@IsNumber
  desconto: number;

  @IsNumber()
  produtoId: number;
}
