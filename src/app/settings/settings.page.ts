import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../server.api.service';
import {TranslationService} from '../translation.service';
import axios from 'axios';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public url = '';
  public lang = '';
  public heartbeat = false;

  constructor(
      public serverApiService: ServerApiService,
      public translationService: TranslationService,
      public router: Router,
      public toastCtrl: ToastController
  ) {
    this.serverApiService.getServerCredentials().then(result => {
      console.log(result);
      if (result.ip === '' || result.port === '' || result.ip === null || result.port === null) {
        this.url = '';
        return;
      }
      this.url = `${result.ip}:${result.port}`;
    });
    this.lang = this.translationService.getDefaultLanguage();
  }

  public testConnection() {
    axios.get('http://' + this.url + '/ping').then(async resp => {
      if (resp.data.heartbeat) {

        this.heartbeat = true;
      }
    });
  }

  public save() {
    const splitUrl = this.url.split(':');
    this.serverApiService.saveServerCredentials(splitUrl[0], splitUrl[1]);
    this.toastCtrl.create({
      message: 'Your settings have been saved.',
      duration: 2000
    }).then(toast => {
      toast.present();
      this.router.navigate(["/dashboard"]);
    });
    
    
  }

  public cancel() {
    this.router.navigate(["/dashboard"]);
  }

  public langChange() {
    console.log(this.lang);
    this.translationService.setLanguage(this.lang);
  }

  ngOnInit() {
  }

}
