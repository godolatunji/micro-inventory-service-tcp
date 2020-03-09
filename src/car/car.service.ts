import { Injectable } from '@nestjs/common';
import { CarRepository } from './car.repository';

@Injectable()
export class CarService {
  constructor(private readonly carRepository: CarRepository) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findAll({ carQuery, headers }) {
    const resp = this.carRepository.listCars(carQuery);
    return resp;
  }
}
