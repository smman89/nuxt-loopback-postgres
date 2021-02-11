import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'realestate',
  host: '127.0.0.1',
  port: 5436,
  user: 'postgres',
  password: 'postgres',
  database: 'realestate',
  connector: 'postgresql'
};


@lifeCycleObserver('datasource')
export class RealestateDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'realestate';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.realestate', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
