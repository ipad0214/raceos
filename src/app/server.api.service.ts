import { Injectable } from '@angular/core';
import { Plugins} from '@capacitor/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ServerApiService {
  private storage = Plugins.Storage;
  public ip = this.storage.get({key: 'ip'});
  public port = this.storage.get({key: 'port'});

  constructor() {}

  public saveServerCredentials(ip: string, port: string) {
    this.storage.set({key: 'ip', value: ip});
    this.storage.set({key: 'port', value: port});
  }

  public async getServerCredentials(): Promise<any> {
    return new Promise<any>(async (resolve) => {
      const result = {
        ip: '',
        port: ''
      };

      const ipResult = await this.storage.get({key: 'ip'});
      const portResult = await this.storage.get({key: 'port'});

      result.ip = ipResult.value;
      result.port = portResult.value;

      resolve(result);
    });
  }
}
