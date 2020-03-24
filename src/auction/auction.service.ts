import { Injectable } from '@nestjs/common';
import { AuctionRepository } from './auction.repository';

@Injectable()
export class AuctionService {
  constructor(private readonly auctionRepository: AuctionRepository) {}

  async rawQuery({ query, headers }) {
    const resp = await this.auctionRepository.rawQuery(query);
    return resp;
  }
}
