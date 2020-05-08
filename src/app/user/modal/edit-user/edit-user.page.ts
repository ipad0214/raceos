import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UserEditComponent } from '../../user-edit/user-edit.component';
import { TakePictureComponent } from 'src/app/components/take-picture/take-picture.component';
import { ServerApiService } from 'src/app/server.api.service';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
  public user: any = this.navParams.data.user;
  @ViewChild(UserEditComponent, {static: false}) editor: UserEditComponent;
  @ViewChild(TakePictureComponent, {static: false}) takePicture: TakePictureComponent;

  constructor(
    public apiService: ServerApiService,
    public navParams: NavParams,
    public modalController: ModalController
  ) {}

  ionViewDidEnter() {
    this.editor.selectedCar = this.user.selectedCar;
    this.editor.name = this.user.name;
    this.takePicture.img = this.user.img;
  }

  ngOnInit() {
  }

  public save() {
    const user = {
      favoriteCar: this.editor.selectedCar,
      name: this.editor.name,
      img: 'lsdkmgpoiasdjfgiopasdspiog'
    }

    this.apiService.post("user", user).then(resp => console.log(resp));
  }

  public cancel() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
