import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../server.api.service';
import {TranslationService} from '../translation.service';
import axios from 'axios';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public url = '';
  public lang = '';
  public heartbeat = false;

  public toastService = Plugins.Toast;

  constructor(
      public serverApiService: ServerApiService,
      public translationService: TranslationService,
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
        await this.toastService.show({
          text: 'Heartbeat okay -- Go on.'
        });
        this.heartbeat = true;
      }
    });
  }

  public save() {
    const splitUrl = this.url.split(':');
    this.serverApiService.saveServerCredentials(splitUrl[0], splitUrl[1]);
    console.log(splitUrl);
  }

  public langChange() {
    console.log(this.lang);
    this.translationService.setLanguage(this.lang);
  }

  ngOnInit() {
  }

}
