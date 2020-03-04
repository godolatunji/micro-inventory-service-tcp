import { HttpService, Injectable } from '@nestjs/common';
import { config } from './config';

@Injectable()
export class BaseRepository {
  constructor(private readonly httpService: HttpService) {}

  async login(): Promise<void> {
    const data = `
        login(email: ${config.fcg.username}, password: ${config.fcg.password}) {
            token
        }
        `;
    const resp = await this.sendRequest(data);
    return resp.token;
  }

  async sendRequest(data): Promise<any> {
    return this.httpService.post(`${config.fcg.baseUrl}/auth`, data, {
      headers: { 'Content-Type': 'application/graphql' },
    });
  }
}
