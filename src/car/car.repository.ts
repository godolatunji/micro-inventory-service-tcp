import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base.repository';

@Injectable()
export class CarRepository extends BaseRepository {
  listCars(params?) {
    // params and response should be typed
    const data = `
        {
            car(country: NG) {
              list {
                make
                model
                year
                trim
                trimDetails
                country
                status {
                  status
                  reason
                  statusType
                }
                paperwork {
                  id
                  documentStatus
                  documentLocation
                  documentHandoverToBuyer
                }
              }
              count
            }
          }
        `;
    return this.sendRequest(data);
  }
}
