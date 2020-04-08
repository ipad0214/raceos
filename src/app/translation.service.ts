import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(
      private translate: TranslateService
  ) { }

  getDefaultLanguage() {
    const language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    return language;
  }

  setLanguage(setLang) {
    console.log(setLang);
    this.translate.use(setLang);
  }

}
