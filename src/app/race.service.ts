import { Injectable } from '@angular/core';
import {ServerApiService} from './server.api.service';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  public activeRace: false;
  public duration: 0;
  public currentRound: 0;
  public POLLING_INTERVAL: 200;

  constructor(
      public serverApiService: ServerApiService
  ) {
    this.update();
  }

  public update() {
      setInterval(() => {
        if(this.activeRace) {
        this.serverApiService.get('race/update').then(res => {
          console.log(res);
        });
      };
    }, this.POLLING_INTERVAL);
  }
}
