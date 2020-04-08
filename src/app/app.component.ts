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
      title: 'Race',
      url: '/race',
      icon: 'flag'
    },
    {
      title: 'Users',
      url: '/user',
      icon: 'person'
    },
    {
      title: 'Cars',
      url: '/cars',
      icon: 'car-sport'
    },
    {
      title: 'Settings',
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
      this.translation.get('HOME.TITLE').subscribe(res => {
        console.log(res);
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

  }
}
