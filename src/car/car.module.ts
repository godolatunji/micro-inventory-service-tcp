import { HttpModule, Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarRepository } from './car.repository';
import { CarService } from './car.service';

const carRepositoryProvider = {
  provide: CarRepository,
  useClass: CarRepository,
};

@Module({
  imports: [HttpModule],
  providers: [CarService, carRepositoryProvider],
  controllers: [CarController],
})
export class CarModule {}
