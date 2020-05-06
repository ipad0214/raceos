import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';
import { ModalController } from '@ionic/angular';
import { UserCreatePage } from './user-create/user-create.page';
import { ServerApiService } from '../server.api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  public showSpinner = false;
  public users: Array<any> = [];

  constructor(
      public translate: TranslationService,
      public modalController: ModalController,
      public apiService: ServerApiService
  ) {
    this.loadAllUsers();
  }

  ngOnInit() {
  }

  public async openCreateModal() {
    const modal = await this.modalController.create({
      component: UserCreatePage
    });

    modal.onDidDismiss().then(() => {
      this.loadAllUsers();
    });
    return await modal.present();
  }

  public loadAllUsers() {
    this.apiService.get('user').then(result => {
      this.showSpinner = false;
      this.users = result;
    });
  }
}
