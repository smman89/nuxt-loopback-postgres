import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}, postgresql: {schema: 'public', table: 'transaction'}})
export class Transaction extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    postgresql: {
      columnName: 'transaction_id',
    },
  })
  transactionId?: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'estate_id',
    },
  })
  estateId: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'buyer_id',
    },
  })
  buyerId: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'seller_id',
    },
  })
  sellerId: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'transaction_type_id',
    },
  })
  transactionTypeId: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'list_price',
    },
  })
  listPrice: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'sold_price',
    },
  })
  soldPrice: number;

  @property({
    type: 'date',
    required: true,
    postgresql: {
      columnName: 'date_of_start',
    },
  })
  dateOfStart: string;

  @property({
    type: 'date',
    postgresql: {
      columnName: 'date_of_end',
    },
  })
  dateOfEnd?: string;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'status_id',
    },
  })
  statusId: number;


  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Transaction>) {
    super(data);
  }
}

export interface TransactionRelations {
  // describe navigational properties here
}

export type TransactionWithRelations = Transaction & TransactionRelations;
