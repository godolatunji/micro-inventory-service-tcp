import { Injectable } from '@nestjs/common';
import { SearchRepository } from './search.repository';

@Injectable()
export class SearchService {
  constructor(private readonly searchRepository: SearchRepository) {}

  async rawQuery({ data, headers }) {
    const resp = await this.searchRepository.rawQuery(data);
    return resp;
  }
}
