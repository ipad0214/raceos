import { Component, OnInit, ViewChild } from '@angular/core';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { ServerApiService } from 'src/app/server.api.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.page.html',
  styleUrls: ['./user-create.page.scss'],
})
export class UserCreatePage implements OnInit {

  @ViewChild(UserEditComponent, {static: false}) editor: UserEditComponent;

  constructor(
    public apiService: ServerApiService
  ) { }

  ngOnInit() {
  }

  public save() {
    const user = {
      favoriteCar: this.editor.selectedCar,
      name: this.editor.name,
      img: this.editor.img
    }

    this.apiService.post("user", user).then(resp => console.log(resp));
  }

  public cancel() {

  }

}
