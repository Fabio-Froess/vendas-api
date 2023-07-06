import { ItemVenda } from '@prisma/client';

export class ItemVendaEntity implements ItemVenda {
  id: number;
  quantidade: number;
  desconto: number;
  produtoId: number;
}
