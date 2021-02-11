import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RealestateDataSource} from '../datasources';
import {Listing, ListingRelations} from '../models';

export class ListingRepository extends DefaultCrudRepository<
  Listing,
  typeof Listing.prototype.listingId,
  ListingRelations
> {
  constructor(
    @inject('datasources.realestate') dataSource: RealestateDataSource,
  ) {
    super(Listing, dataSource);
  }
}
