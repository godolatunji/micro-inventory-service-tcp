import { Injectable } from '@nestjs/common';
import { AuctionRepository } from './auction.repository';

@Injectable()
export class AuctionService {
  constructor(private readonly auctionRepository: AuctionRepository) {}

  async rawQuery({ headers, data }) {
    const resp = await this.auctionRepository.rawQuery(data);
    return resp;
  }
}
