import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  preco: number;
}
