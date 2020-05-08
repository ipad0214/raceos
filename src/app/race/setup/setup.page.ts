import { Component, OnInit } from '@angular/core';
import { ServerApiService } from 'src/app/server.api.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {
  public driverLaneOne: any;
  public driverLaneTwo: any;
  public carLaneOne: any;
  public carLaneTwo: any;
  public users: Array<any>;
  public cars: Array<any>;
  public duration: number = 10;

  constructor(
    public serverApi: ServerApiService,
    public modalCtrl: ModalController
  ) {
    this.serverApi.get("user").then(res => {
      this.users = res;
    });
    this.serverApi.get("car").then(res => {
      this.cars = res;
    })
  }

  ngOnInit() {

  }

  public save() {
    console.log({
      driverLaneOne: this.driverLaneOne,
      driverLaneTwo: this.driverLaneTwo,
      carLaneOne: this.carLaneOne,
      carLaneTwo: this.carLaneTwo,
      duration: this.duration
    });

    this.modalCtrl.dismiss();
  }

  public cancel() {
    this.modalCtrl.dismiss();
  }

}
