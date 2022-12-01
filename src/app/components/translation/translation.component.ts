import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlagImagePipe } from '@app/pipes/flag-image.pipe';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss'],
  standalone: true,
  imports: [CommonModule, FlagImagePipe]
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