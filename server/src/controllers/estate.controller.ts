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
import {Estate} from '../models';
import {EstateRepository} from '../repositories';

export class EstateController {
  constructor(
    @repository(EstateRepository)
    public estateRepository: EstateRepository,
  ) { }

  @post('/estates')
  @response(200, {
    description: 'Estate model instance',
    content: {'application/json': {schema: getModelSchemaRef(Estate)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estate, {
            title: 'NewEstate',
            exclude: ['estateId'],
          }),
        },
      },
    })
    estate: Omit<Estate, 'estateId'>,
  ): Promise<Estate> {
    return this.estateRepository.create(estate);
  }

  @get('/estates/count')
  @response(200, {
    description: 'Estate model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Estate) where?: Where<Estate>,
  ): Promise<Count> {
    return this.estateRepository.count(where);
  }

  @get('/estates')
  @response(200, {
    description: 'Array of Estate model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Estate, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Estate) filter?: Filter<Estate>,
  ): Promise<Estate[]> {
    return this.estateRepository.find(filter);
  }

  @get('/estates/{id}')
  @response(200, {
    description: 'Estate model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Estate, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Estate, {exclude: 'where'}) filter?: FilterExcludingWhere<Estate>
  ): Promise<Estate> {
    return this.estateRepository.findById(id, filter);
  }


  @put('/estates/{id}')
  @response(204, {
    description: 'Estate PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() estate: Estate,
  ): Promise<void> {
    await this.estateRepository.replaceById(id, estate);
  }

  @del('/estates/{id}')
  @response(204, {
    description: 'Estate DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.estateRepository.deleteById(id);
  }
}
