import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RealestateDataSource} from '../datasources';
import {Location, LocationRelations} from '../models';

export class LocationRepository extends DefaultCrudRepository<
  Location,
  typeof Location.prototype.locationId,
  LocationRelations
> {
  constructor(
    @inject('datasources.realestate') dataSource: RealestateDataSource,
  ) {
    super(Location, dataSource);
  }
}
