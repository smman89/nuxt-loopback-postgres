import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Listing extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  listingId?: number;

  @property({
    type: 'number',
    required: true,
  })
  estateId: number;

  @property({
    type: 'number',
    required: true,
  })
  userId: number;

  @property({
    type: 'date',
    required: true,
  })
  dateOfStart: string;

  @property({
    type: 'date',
  })
  dateOfEnd?: string;

  @property({
    type: 'number',
    required: true,
  })
  statusId: number;

  @property({
    type: 'number',
    required: true,
  })
  listPrice: number;

  @property({
    type: 'string',
  })
  title?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Listing>) {
    super(data);
  }
}

export interface ListingRelations {
  // describe navigational properties here
}

export type ListingWithRelations = Listing & ListingRelations;
