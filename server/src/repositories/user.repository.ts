import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RealestateDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.userId,
  UserRelations
> {
  constructor(
    @inject('datasources.realestate') dataSource: RealestateDataSource,
  ) {
    super(User, dataSource);
  }
}
