import { Injectable } from '@nestjs/common';
import { SearchRepository } from './search.repository';

@Injectable()
export class SearchService {
  constructor(private readonly searchRepository: SearchRepository) {}

  async rawQuery({ query, headers }) {
    const resp = await this.searchRepository.rawQuery(query);
    return resp;
  }
}
