import { HttpModule, Module } from '@nestjs/common';
import { InspectionController } from './inspection.controller';
import { InspectionRepository } from './inspection.repository';
import { InspectionService } from './inspection.service';

const inspectionRepositoryProvider = {
  provide: InspectionRepository,
  useClass: InspectionRepository,
};

@Module({
  imports: [HttpModule],
  providers: [InspectionService, inspectionRepositoryProvider],
  controllers: [InspectionController],
})
export class InspectionModule {}
