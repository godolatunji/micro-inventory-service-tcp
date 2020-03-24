import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { SearchService } from './search.service';

@Controller()
export class SearchController {
  constructor(
    @Inject(SearchService)
    private readonly searchService: SearchService,
  ) {}

  @MessagePattern({ cmd: 'searchRawQuery' })
  rawQuery({ query, headers }): Promise<any> {
    return this.searchService.rawQuery({ query, headers });
  }
}
