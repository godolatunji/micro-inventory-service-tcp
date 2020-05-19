import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CarDataService } from './cardata.service';

@Controller()
export class CarDataController {
  constructor(
    @Inject(CarDataService)
    private readonly carDataService: CarDataService,
  ) {}

  @MessagePattern({ cmd: 'cardataRawQuery' })
  rawQuery({ data, headers }): Promise<any> {
    return this.carDataService.rawQuery({ data, headers });
  }
}
