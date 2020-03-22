import { Injectable } from '@nestjs/common';
import { CarDataRepository } from './cardata.repository';

@Injectable()
export class CarDataService {
  constructor(private readonly carDataRepository: CarDataRepository) {}

  async rawQuery({ query, headers }) {
    const resp = await this.carDataRepository.rawQuery(query);
    return resp;
  }
}
