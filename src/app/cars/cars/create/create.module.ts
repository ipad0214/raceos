import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePageRoutingModule } from './create-routing.module';

import { CreatePage } from './create.page';
import {TranslateModule} from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/components/components.modules';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        CreatePageRoutingModule,
        TranslateModule
    ],
  declarations: [CreatePage]
})
export class CreatePageModule {}
