import { HttpModule, Module } from '@nestjs/common';
import { CarDataController } from './cardata.controller';
import { CarDataRepository } from './cardata.repository';
import { CarDataService } from './cardata.service';

const carDataRepositoryProvider = {
  provide: CarDataRepository,
  useClass: CarDataRepository,
};

@Module({
  imports: [HttpModule],
  providers: [CarDataService, carDataRepositoryProvider],
  controllers: [CarDataController],
})
export class CarDataModule {}
