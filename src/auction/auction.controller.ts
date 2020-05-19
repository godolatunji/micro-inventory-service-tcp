import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuctionService } from './auction.service';

@Controller()
export class AuctionController {
  constructor(
    @Inject(AuctionService)
    private readonly auctionService: AuctionService,
  ) {}

  @MessagePattern({ cmd: 'auctionRawQuery' })
  rawQuery({ headers, data }): Promise<any> {
    return this.auctionService.rawQuery({ headers, data });
  }
}
