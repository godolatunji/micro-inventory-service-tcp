import { Injectable } from '@nestjs/common';
import { CarRepository } from './car.repository';

@Injectable()
export class CarService {
  constructor(private readonly carRepository: CarRepository) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findAll({ data, headers }) {
    const resp = this.carRepository.listCars(data);
    return resp;
  }

  async rawQuery({ data, headers }) {
    const resp = await this.carRepository.rawQuery(data);
    return resp;
  }
}
