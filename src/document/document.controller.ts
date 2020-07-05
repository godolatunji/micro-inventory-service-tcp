import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DocumentService } from './document.service';

@Controller()
export class DocumentController {
  constructor(
    @Inject(DocumentService)
    private readonly documentService: DocumentService,
  ) {}

  @MessagePattern({ cmd: 'documentRawQuery' })
  rawQuery({ data, headers }): Promise<any> {
    return this.documentService.rawQuery({ data, headers });
  }
}
