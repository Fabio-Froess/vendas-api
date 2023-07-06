import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAtendenteDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  data_nascimento: Date;
}
