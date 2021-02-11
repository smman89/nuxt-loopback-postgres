import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}, postgresql: {schema: 'public', table: 'user'}})
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  userId?: number;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'number',
  })
  phone?: number;

  @property({
    type: 'string',
    required: true,
  })
  fullname: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
