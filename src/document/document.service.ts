import { Injectable } from '@nestjs/common';
import { DocumentRepository } from './document.repository';

@Injectable()
export class DocumentService {
  constructor(private readonly documentRepository: DocumentRepository) {}

  async rawQuery({ query, headers }) {
    const resp = await this.documentRepository.rawQuery(query);
    return resp;
  }
}
