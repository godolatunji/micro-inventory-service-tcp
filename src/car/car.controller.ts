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
  find(data): Promise<any> { // this should be typed
    return this.carService.findAll(data);
  }
}
