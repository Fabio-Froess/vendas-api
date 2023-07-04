import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  @IsNotEmpty()
  telefone: number;

  @IsString()
  @IsNotEmpty()
  endereco: string;
}
