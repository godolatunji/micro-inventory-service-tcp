import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { InspectionService } from './inspection.service';

@Controller()
export class InspectionController {
  constructor(
    @Inject(InspectionService)
    private readonly inspectionService: InspectionService,
  ) {}

  @MessagePattern({ cmd: 'inspectionRawQuery' })
  rawQuery({ data, headers }): Promise<any> {
    return this.inspectionService.rawQuery({ data, headers });
  }
}
