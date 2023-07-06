import { Venda } from '@prisma/client';

export class VendaEntity implements Venda {
  id: number;
  data: Date;
  clienteId: number;
  atendenteId: number;
  itemVendaId: number;
}
