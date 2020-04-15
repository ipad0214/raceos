import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../server.api.service';
import { ModalController } from '@ionic/angular';
import { CreatePage } from './cars/create/create.page';

const route = 'car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {
  public showSpinner = true;
  public cars: Array<any> = [];

  constructor(
      public apiService: ServerApiService,
      public modalController: ModalController
  ) {
    this.loadAllCars();
  }

  loadAllCars() {
    this.apiService.get(route).then(result => {
      this.showSpinner = false;
      this.cars = result;
    });
  }

  async openCreateModal() {
    const modal = await this.modalController.create({
      component: CreatePage
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
