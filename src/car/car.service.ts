import { Injectable } from '@nestjs/common';
import { CarRepository } from './car.repository';

@Injectable()
export class CarService {
  constructor(private readonly carRepository: CarRepository) {}
  async findAll(params) {
    const resp = this.carRepository.listCars(params);
    return resp;
  }
}
