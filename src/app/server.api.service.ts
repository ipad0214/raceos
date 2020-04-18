import { Injectable } from '@angular/core';
import { Plugins} from '@capacitor/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ServerApiService {
  private storage = Plugins.Storage;
  public ip = '';
  public port = '';

  constructor() {
  }

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

      this.ip = ipResult.value;
      this.port = portResult.value;

      resolve(result);
    });
  }

  public get(route: string): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      if (this.ip === '') {
        await this.getServerCredentials();
      }
      const url = `http://${this.ip}:${this.port}/${route}`;
      axios.get(url).then((resp: any) => {
        resolve(resp.data);
      });
    });
  }

  public post(route: string, data: any): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      if (this.ip === '') {
        await this.getServerCredentials();
      }
      const url = `http://${this.ip}:${this.port}/${route}`;
      axios.post(url, data).then((resp: any) => {
        resolve(resp);
      });
    });
  }

  public put(route: string, id: number, data: any): Promise<any> {
    return new Promise<any>(async (resolve) => {
      if (this.ip === '') {
        await this.getServerCredentials();
      }
      const url = `http://${this.ip}:${this.port}/${route}`;
      axios.put(url, data,  { params: { id }}).then(resp => {
        resolve(resp);
      });
    });
  }
}
