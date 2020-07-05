import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base.repository';

@Injectable()
export class AuctionRepository extends BaseRepository {
  async rawQuery(query: string): Promise<any> {
    return this.sendRequest('auction', query);
  }
}
