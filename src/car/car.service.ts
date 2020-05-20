import { Injectable } from '@nestjs/common';
import { CarRepository } from './car.repository';

@Injectable()
export class CarService {
  constructor(private readonly carRepository: CarRepository) {}
  async rawQuery({ data, headers }) {
    const resp = await this.carRepository.rawQuery(data);
    return resp;
  }
}
