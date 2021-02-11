import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RealestateDataSource} from '../datasources';
import {Estate, EstateRelations} from '../models';

export class EstateRepository extends DefaultCrudRepository<
  Estate,
  typeof Estate.prototype.estateId,
  EstateRelations
> {
  constructor(
    @inject('datasources.realestate') dataSource: RealestateDataSource,
  ) {
    super(Estate, dataSource);
  }
}
