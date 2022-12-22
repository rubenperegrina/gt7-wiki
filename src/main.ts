import { HttpClient, HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { routes } from "@app/app-routing.module";
import { AppComponent } from "@app/app.component";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(TranslateModule.forRoot(({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })))
  ],
}).catch(err => console.error(err));

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}