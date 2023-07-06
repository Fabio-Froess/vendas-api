import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateVendaDto {
  @IsDateString()
  @IsNotEmpty()
  data: Date;

  @IsNumber()
  clienteId: number;

  @IsNumber()
  atendenteId: number;

  @IsNumber()
  itemVendaId: number;
}
