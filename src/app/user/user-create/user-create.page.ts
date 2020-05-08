import { Component, OnInit, ViewChild } from '@angular/core';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { ServerApiService } from 'src/app/server.api.service';
import { TakePictureComponent } from 'src/app/components/take-picture/take-picture.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.page.html',
  styleUrls: ['./user-create.page.scss'],
})
export class UserCreatePage implements OnInit {

  @ViewChild(UserEditComponent, {static: false}) editor: UserEditComponent;
  @ViewChild(TakePictureComponent, {static: false}) takePicture: TakePictureComponent;

  constructor(
    public apiService: ServerApiService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  public save() {
    const user = {
      favoriteCar: this.editor.selectedCar,
      name: this.editor.name,
      img: this.takePicture.img
    }

    this.apiService.post("user", user).then(() => this.modalController.dismiss()).catch(err => console.log(err));
  }

  public cancel() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
