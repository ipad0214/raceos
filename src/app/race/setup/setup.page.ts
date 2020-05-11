import { Component, OnInit } from '@angular/core';
import { ServerApiService } from 'src/app/server.api.service';
import { ModalController, ToastController } from '@ionic/angular';

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
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
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
    const raceSetup = {
      driverLaneOne: this.driverLaneOne,
      driverLaneTwo: this.driverLaneTwo,
      carLaneOne: this.carLaneOne,
      carLaneTwo: this.carLaneTwo,
      duration: this.duration
    };

    this.serverApi.post("race/setup", raceSetup).then(resp => {
      const { data } = resp;
      this.modalCtrl.dismiss(data);
    }).catch(err => {
      this.toastCtrl.create({
        message: `Error: ${err}`,
        duration: 2000
      }).then(toast => toast.present());
    });    
  }

  public cancel() {
    this.modalCtrl.dismiss();
  }
}
