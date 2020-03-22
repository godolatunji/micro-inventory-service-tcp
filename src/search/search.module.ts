import { HttpModule, Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchRepository } from './search.repository';
import { SearchService } from './search.service';

const searchRepositoryProvider = {
  provide: SearchRepository,
  useClass: SearchRepository,
};

@Module({
  imports: [HttpModule],
  providers: [SearchService, searchRepositoryProvider],
  controllers: [SearchController],
})
export class SearchModule {}
