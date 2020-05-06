import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePage } from './create.page';
import {EditComponent} from '../edit/edit.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: CreatePage
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, IonicModule, FormsModule, TranslateModule],
    exports: [RouterModule, EditComponent],
    declarations: [
        EditComponent
    ]
})
export class CreatePageRoutingModule {}
