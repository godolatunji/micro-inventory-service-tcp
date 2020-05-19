import { Injectable } from '@nestjs/common';
import { DocumentRepository } from './document.repository';

@Injectable()
export class DocumentService {
  constructor(private readonly documentRepository: DocumentRepository) {}

  async rawQuery({ data, headers }) {
    const resp = await this.documentRepository.rawQuery(data);
    return resp;
  }
}
