import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateVendaDto {
  @IsString()
  @IsNotEmpty()
  data: string;

  @IsNumber()
  clienteId: number;

  @IsNumber()
  atendenteId: number;

  @IsNumber()
  itemVendaId: number;
}
