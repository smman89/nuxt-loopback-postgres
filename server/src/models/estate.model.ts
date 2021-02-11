import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}, postgresql: {schema: 'public', table: 'estate'}})
export class Estate extends Entity {
  @property({
    type: 'number',
    id: true,
    postgresql: {
      columnName: 'estate_id',
    },
    generated: true,
  })
  estateId?: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'location_id',
    },
  })
  locationId: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'number',
    required: true,
  })
  bedrooms: number;

  @property({
    type: 'number',
    required: true,
  })
  bathrooms: number;

  @property({
    type: 'array',
    itemType: 'string',
  })
  amenities?: string[];


  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Estate>) {
    super(data);
  }
}

export interface EstateRelations {
  // describe navigational properties here
}

export type EstateWithRelations = Estate & EstateRelations;
