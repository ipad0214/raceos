import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCreatePage } from './user-create.page';
import { UserEditComponent } from '../user-edit/user-edit.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: UserCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, IonicModule, FormsModule, TranslateModule],
  exports: [RouterModule, UserEditComponent],
  declarations: [
    UserEditComponent
]
})
export class UserCreatePageRoutingModule {}
