import { Cliente } from '@prisma/client';

export class ClienteEntity implements Cliente {
  id: number;
  nome: string;
  telefone: number;
  endereco: string;
}
