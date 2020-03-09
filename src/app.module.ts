import { Module } from '@nestjs/common';
import { CacheModule } from './cache/cache.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [CacheModule, CarModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
