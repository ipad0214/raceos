import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {EditComponent} from '../edit/edit.component';
import {ServerApiService} from '../../../server.api.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.page.html',
  styleUrls: ['./car-edit.page.scss'],
})
export class CarEditPage implements OnInit {
  public car: any = this.navParams.data.car;
  @ViewChild(EditComponent, {static: false}) editor: EditComponent;

  constructor(
      public navParams: NavParams,
      public apiService: ServerApiService,
      public modalController: ModalController
  ) {}

  ngOnInit(): void {
  }

  ionViewDidEnter() {
    this.editor.speed = this.car.speed;
    this.editor.acceleration = this.car.acceleration;
    this.editor.drift = this.car.drift;
    this.editor.steering = this.car.steering;
    this.editor.name = this.car.name;
    this.editor.manufacturer = this.car.manufacturer;
    this.editor.model = this.car.model;
  }

  public save() {
    const data = this.editor.getData();
    this.apiService.put('car', this.car.id, data).then(resp => {
      console.log(resp);
    });
    this.modalController.dismiss({
      dismissed: true
    });
  }

  public cancel() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
