import { HttpService, Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { CacheService } from './cache/cache.service';
import { config } from './config';

@Injectable()
export class BaseRepository {
  constructor(
    private readonly httpService: HttpService,
    private readonly cacheService: CacheService,
  ) {}

  async login(): Promise<void> {
    const data = `
    {
      login(email: "${config.fcg.username}", password: "${config.fcg.password}") {
        token
      }
    }`;
    const resp: any = await this.send('auth', data);
    return resp;
  }

  async sendRequest(url: string, data: string): Promise<any> {
    let token = await this.cacheService.get('inventory::fgc::token');

    if (!token) {
      const body: any = await this.login();
      token = body.data.login.token;
      await this.cacheService.save('inventory::fgc::token', token);
    }

    const header = { Authorization: `Bearer ${token}` };
    return this.send(url, data, header);
  }

  async send(
    url: string,
    data: string,
    header?: { [key: string]: string },
  ): Promise<any> {
    const headers = Object.assign(
      { 'Content-Type': 'application/graphql' },
      header,
    );
    try {
      const resp: any = await this.httpService
        .post(`${config.fcg.baseUrl}/${url}/`, data, { headers })
        .toPromise();
      return resp.data;
    } catch (err) {
      Logger.log(err);
      throw new RpcException(err.message);
    }
  }
}

// {}: { [key: string]: string }
