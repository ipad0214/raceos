import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'PAGES.RACE',
      url: '/race',
      icon: 'flag'
    },
    {
      title: 'PAGES.USER',
      url: '/user',
      icon: 'person'
    },
    {
      title: 'PAGES.CAR',
      url: '/cars',
      icon: 'car-sport'
    },
    {
      title: 'PAGES.SETTINGS',
      url: '/settings',
      icon: 'cog'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translation: TranslateService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.translation.addLangs(['de', 'en']);
      this.translation.use('de');
      this.translation.setDefaultLang('de');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

  }
}
