import { NgModule }  from '@angular/core';
import { TakePictureComponent } from './take-picture/take-picture.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UserEditComponent } from '../user/user-edit/user-edit.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, IonicModule, FormsModule, TranslateModule.forRoot()],
    declarations: [TakePictureComponent, UserEditComponent],
    exports: [TakePictureComponent, UserEditComponent]
})
export class ComponentsModule{}