import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base.repository';

@Injectable()
export class CarDataRepository extends BaseRepository {
  async rawQuery(query: string): Promise<any> {
    return this.sendRequest('cardata', query);
  }
}
