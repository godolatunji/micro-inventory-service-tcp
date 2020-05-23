import { Module } from '@nestjs/common';
import { AuctionModule } from './auction/auction.module';
import { CacheModule } from './cache/cache.module';
import { CarModule } from './car/car.module';
import { CarDataModule } from './cardata/cardata.module';
import { DatabaseModule } from './database/database.module';
import { DocumentModule } from './document/document.module';
import { InspectionModule } from './inspection/inspection.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    DatabaseModule,
    CacheModule,
    CarModule,
    AuctionModule,
    InspectionModule,
    SearchModule,
    CarDataModule,
    DocumentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
