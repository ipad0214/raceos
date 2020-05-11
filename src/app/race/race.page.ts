import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';
import { ModalController } from '@ionic/angular';
import { SetupPage } from './setup/setup.page';

@Component({
  selector: 'app-race',
  templateUrl: './race.page.html',
  styleUrls: ['./race.page.scss'],
})
export class RacePage implements OnInit {
  public activeRace: any;

  constructor(
    public raceService: RaceService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
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
}
