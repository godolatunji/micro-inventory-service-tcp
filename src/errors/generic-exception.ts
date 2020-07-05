import { RpcException } from '@nestjs/microservices';

export class GenericException extends RpcException {
  constructor(errorCode: number, msg: string | null | object) {
    super(`${errorCode}: ${msg}`);
  }
}
