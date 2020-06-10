import { Injectable } from '@angular/core';
import { ServerApiService } from './server.api.service';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  public activeRace: false;
  public data: any;
  public POLLING_INTERVAL: number = 200;

  constructor(
      public serverApiService: ServerApiService
  ) {

  }

  public update() {
      setInterval(() => {
        if(this.activeRace) {
        this.serverApiService.get('race/update').then(res => {
          console.log(res);
          this.data = res;
        });
      };
    }, this.POLLING_INTERVAL);
  }
}
