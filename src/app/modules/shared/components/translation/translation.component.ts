import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})

export class TranslationComponent {
  activeLang: string = 'en';
  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang(this.activeLang);
  }

  cambiarLenguaje(lang: string) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
}