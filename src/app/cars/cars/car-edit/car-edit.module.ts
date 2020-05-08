import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarEditPageRoutingModule } from './car-edit-routing.module';

import { CarEditPage } from './car-edit.page';
import {CreatePageRoutingModule} from '../create/create-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/components/components.modules';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        CarEditPageRoutingModule,
        CreatePageRoutingModule,
        TranslateModule
    ],
    declarations: [CarEditPage]
})
export class CarEditPageModule {}
