import { HttpModule, Module } from '@nestjs/common';
import { AuctionController } from './auction.controller';
import { AuctionRepository } from './auction.repository';
import { AuctionService } from './auction.service';

const auctionRepositoryProvider = {
  provide: AuctionRepository,
  useClass: AuctionRepository,
};

@Module({
  imports: [HttpModule],
  providers: [AuctionService, auctionRepositoryProvider],
  controllers: [AuctionController],
})
export class AuctionModule {}
