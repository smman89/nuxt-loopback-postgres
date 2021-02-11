import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, post,



  put,

  requestBody,
  response
} from '@loopback/rest';
import {Listing} from '../models';
import {ListingRepository} from '../repositories';

export class ListingController {
  constructor(
    @repository(ListingRepository)
    public listingRepository: ListingRepository,
  ) { }

  @post('/listings')
  @response(200, {
    description: 'Listing model instance',
    content: {'application/json': {schema: getModelSchemaRef(Listing)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Listing, {
            title: 'NewListing',
            exclude: ['listingId'],
          }),
        },
      },
    })
    listing: Omit<Listing, 'listingId'>,
  ): Promise<Listing> {
    return this.listingRepository.create(listing);
  }

  @get('/listings/count')
  @response(200, {
    description: 'Listing model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Listing) where?: Where<Listing>,
  ): Promise<Count> {
    return this.listingRepository.count(where);
  }

  @get('/listings')
  @response(200, {
    description: 'Array of Listing model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Listing, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Listing) filter?: Filter<Listing>,
  ): Promise<Listing[]> {
    return this.listingRepository.find(filter);
  }

  @get('/listings/{id}')
  @response(200, {
    description: 'Listing model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Listing, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Listing, {exclude: 'where'}) filter?: FilterExcludingWhere<Listing>
  ): Promise<Listing> {
    return this.listingRepository.findById(id, filter);
  }

  @put('/listings/{id}')
  @response(204, {
    description: 'Listing PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() listing: Listing,
  ): Promise<void> {
    await this.listingRepository.replaceById(id, listing);
  }

  @del('/listings/{id}')
  @response(204, {
    description: 'Listing DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.listingRepository.deleteById(id);
  }
}
