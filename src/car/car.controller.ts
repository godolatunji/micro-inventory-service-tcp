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
  find({ data, headers }): Promise<any> {
    // this should be typed
    return this.carService.findAll({ data, headers });
  }

  @MessagePattern({ cmd: 'carRawQuery' })
  rawQuery({ headers, data }): Promise<any> {
    return this.carService.rawQuery({ headers, data });
  }
}
