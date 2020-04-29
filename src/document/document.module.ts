import { HttpModule, Module } from '@nestjs/common';
import { DocumentController } from './document.controller';
import { DocumentRepository } from './document.repository';
import { DocumentService } from './document.service';

const documentRepositoryProvider = {
  provide: DocumentRepository,
  useClass: DocumentRepository,
};

@Module({
  imports: [HttpModule],
  providers: [DocumentService, documentRepositoryProvider],
  controllers: [DocumentController],
})
export class DocumentModule {}
