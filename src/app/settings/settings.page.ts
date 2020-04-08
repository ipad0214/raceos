import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../server.api.service';
import {TranslationService} from '../translation.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public url = '';
  public lang = '';

  constructor(
      public serverApiService: ServerApiService,
      public translationService: TranslationService
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
