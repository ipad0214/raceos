import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../server.api.service';
import { ModalController } from '@ionic/angular';
import { CreatePage } from './cars/create/create.page';
import {CarEditPage} from './cars/car-edit/car-edit.page';

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

  public loadAllCars() {
    this.apiService.get(route).then(result => {
      this.showSpinner = false;
      this.cars = result;
    });
  }

  public async openCreateModal() {
    const modal = await this.modalController.create({
      component: CreatePage
    });

    modal.onDidDismiss().then(() => {
      this.loadAllCars();
    });
    return await modal.present();
  }

  public async editCar(id: number) {
    const car = this.cars.find(x => x.id === id);
    const modal = await this.modalController.create({
      component: CarEditPage,
      componentProps: {
        car
      }
    });
    modal.onDidDismiss().then(() => {
      this.loadAllCars();
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
