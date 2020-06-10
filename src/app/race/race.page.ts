import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';
import { ModalController } from '@ionic/angular';
import { SetupPage } from './setup/setup.page';
import { ServerApiService } from '../server.api.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.page.html',
  styleUrls: ['./race.page.scss'],
})
export class RacePage implements OnInit {
  public activeRace: any;
  private POLLING_INTERVAL: number = 500;

  constructor(
    public modalController: ModalController,
    public apiService: ServerApiService
  ) { }

  private update() {
    setInterval(() => {
      if(this.activeRace) {
        this.apiService.get('race/update').then(res => {
          this.activeRace = res;
        });
      };
    }, this.POLLING_INTERVAL);
  }

  ngOnInit() {
    this.update();
  }

  public async openRaceSetupModal() {
    const modal = await this.modalController.create({
      component: SetupPage
    });

    modal.onDidDismiss().then(activeRace => {
      this.activeRace = activeRace.data;
    });
    return await modal.present();
  }

  public startRace() {
    this.apiService.get("race/start").then(() => {
      
    });
  }

  public finishRace() {
    this.apiService.get("race/finish").then(() => {
      console.log();
    });
  }

  public abortRace() {
    this.apiService.get("race/abort").then(() => {
      console.log();
    });
  }
}
