import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlagImagePipe } from '@app/pipes/flag-image.pipe';
import { FormatDatePipe } from '@app/pipes/format-date-pipe';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TranslationComponent } from './components/translation/translation.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    ToolbarComponent,
    TranslationComponent,
    FlagImagePipe,
    FormatDatePipe,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    })
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
    TranslationComponent,
    FlagImagePipe,
    TranslateModule,
    FormatDatePipe
  ]
})
export class SharedModule { }
