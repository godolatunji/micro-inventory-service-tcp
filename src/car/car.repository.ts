import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base.repository';
import { convertObjectToString } from '../helpers/utils';
import { Car } from './car.type';

@Injectable()
export class CarRepository extends BaseRepository {
  async rawQuery(query: string): Promise<any> {
    return this.sendRequest('car', query);
  }
}
