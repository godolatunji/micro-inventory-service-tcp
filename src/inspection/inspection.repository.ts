import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base.repository';

@Injectable()
export class InspectionRepository extends BaseRepository {
  async rawQuery(query: string): Promise<any> {
    return this.sendRequest('inspection', query);
  }
}
