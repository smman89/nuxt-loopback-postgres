import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}, postgresql: {schema: 'public', table: 'listing'}})
export class Listing extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    postgresql: {
      columnName: 'listing_id',
    },
  })
  listingId?: number;

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
      columnName: 'user_id',
    },
  })
  userId: number;

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

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'list_price',
    },
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
