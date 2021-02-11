import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Transaction extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  transactionId?: number;

  @property({
    type: 'number',
    required: true,
  })
  estateId: number;

  @property({
    type: 'number',
    required: true,
  })
  buyerId: number;

  @property({
    type: 'number',
    required: true,
  })
  sellerId: number;

  @property({
    type: 'number',
    required: true,
  })
  transactionTypeId: number;

  @property({
    type: 'number',
    required: true,
  })
  listPrice: number;

  @property({
    type: 'number',
    required: true,
  })
  soldPrice: number;

  @property({
    type: 'date',
    required: true,
  })
  dateOfBegin: number;

  @property({
    type: 'date',
    required: true,
  })
  dateOfClose: number;

  @property({
    type: 'number',
    required: true,
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
