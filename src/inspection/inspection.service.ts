import { Injectable } from '@nestjs/common';
import { InspectionRepository } from './inspection.repository';

@Injectable()
export class InspectionService {
  constructor(private readonly inspectionRepository: InspectionRepository) {}

  async rawQuery({ data, headers }) {
    const resp = await this.inspectionRepository.rawQuery(data);
    return resp;
  }
}
