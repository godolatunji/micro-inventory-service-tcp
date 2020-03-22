import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base.repository';

@Injectable()
export class SearchRepository extends BaseRepository {
  async rawQuery(query: string): Promise<any> {
    return this.sendRequest('search', query);
  }
}
