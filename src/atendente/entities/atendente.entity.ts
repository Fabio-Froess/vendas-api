import { Atendente } from '@prisma/client';

export class AtendenteEntity implements Atendente {
  id: number;
  nome: string;
  data_nascimento: Date;
}
