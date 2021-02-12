import {
  inject,
  lifeCycleObserver,
  LifeCycleObserver
} from '@loopback/core';
import faker from 'faker';
import {EstateRepository} from '../repositories/estate.repository';
import {LocationRepository} from '../repositories/location.repository';
import {TransactionRepository} from '../repositories/transaction.repository';
const {address, name, internet, random, lorem} = faker;

/**
 * This class will be bound to the application as a `LifeCycleObserver` during
 * `boot`
 */
@lifeCycleObserver('')
export class SampleObserver implements LifeCycleObserver {
  constructor(
    @inject('repositories.LocationRepository') private locationRepo: LocationRepository,
    @inject('repositories.TransactionRepository') private transactionRepo: TransactionRepository,
    @inject('repositories.EstateRepository') private estateRepo: EstateRepository,
  ) { }

  /**
   * This method will be invoked when the application starts
   */
  async start(): Promise<void> {
    // Add your logic for start
    if (true) {
      await this.createEstates();
      await this.createLocations();
      await this.createTransactions();
    }
  }

  /**
   * This method will be invoked when the application stops
   */
  async stop(): Promise<void> {
    // Add your logic for stop
  }

  async createEstates(): Promise<void> {
    const NUMBER_OF_ESTATES = 10
    const estates: object[] = []

    for (let index = 0; index < NUMBER_OF_ESTATES; index++) {
      estates.push({
        locationId: index,
        description: lorem.sentences(),
        bedrooms: random.number({min: 1, max: 6}),
        bathrooms: random.number({min: 1, max: 2}),
      })
    };

    for (const estate of estates) {
      await this.estateRepo.create(estate);
    }
  }

  async createTransactions(): Promise<void> {
    const transactions: object[] = []
    const NUMBER_OF_TRANSACTIONS = 10;

    for (let index = 0; index < NUMBER_OF_TRANSACTIONS; index++) {
      transactions.push({
        estateId: random.number({min: 1, max: 20}),
        buyerId: random.number({min: 1, max: 20}),
        sellerId: random.number({min: 1, max: 20}),
        transactionTypeId: random.number({min: 1, max: 2}),
        listPrice: random.number({min: 10000, max: 20000}),
        soldPrice: random.number({min: 10000, max: 20000}),
        dateOfStart: faker.date.past(),
        dateOfEnd: faker.date.past(),
        statusId: random.number({min: 1, max: 4}),
      })
    };


    for (const t of transactions) {
      await this.transactionRepo.create(t);
    }
  }

  async createLocations(): Promise<void> {
    const locations: object[] = []
    const NUMBER_OF_LOCATIONS = 10;

    for (let index = 0; index < NUMBER_OF_LOCATIONS; index++) {
      locations.push({
        address: address.streetAddress(),
        city: address.city(),
        zip: address.zipCode(),
      })
    };

    for (const l of locations) {
      await this.locationRepo.create(l);
    }
  }
}
