import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CarService } from './car.service';

@Controller()
export class CarController {
  constructor(
    @Inject(CarService)
    private readonly carService: CarService,
  ) {}

  @MessagePattern({ cmd: 'carRawQuery' })
  rawQuery({ headers, data }): Promise<any> {
    return this.carService.rawQuery({ headers, data });
  }
}
