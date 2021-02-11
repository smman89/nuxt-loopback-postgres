import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RealestateDataSource} from '../datasources';
import {Transaction, TransactionRelations} from '../models';

export class TransactionRepository extends DefaultCrudRepository<
  Transaction,
  typeof Transaction.prototype.transactionId,
  TransactionRelations
> {
  constructor(
    @inject('datasources.realestate') dataSource: RealestateDataSource,
  ) {
    super(Transaction, dataSource);
  }
}
