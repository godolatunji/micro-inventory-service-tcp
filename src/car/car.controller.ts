import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CarService } from './car.service';

@Controller()
export class CarController {
  constructor(
    @Inject(CarService)
    private readonly carService: CarService,
  ) {}

  @MessagePattern({ cmd: 'listCars' })
  find({ carQuery, headers }): Promise<any> {
    // this should be typed
    return this.carService.findAll({ carQuery, headers });
  }

  @MessagePattern({ cmd: 'carRawQuery' })
  rawQuery({ query, headers }): Promise<any> {
    return this.carService.rawQuery({ query, headers });
  }
}
