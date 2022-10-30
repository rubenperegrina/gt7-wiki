import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { SharedModule } from './modules/shared/shared.module';
import { DailyRaceComponent } from './pages/daily-race/daily-race.component';
import { LegendCarsComponent } from './pages/legend-cars/legend-cars.component';
import { UsedCarsComponent } from './pages/used-cars/used-cars.component';
import { SelectorComponent } from './components/selector/selector.component';
import { TrackImagePipe } from './pipes/track-image.pipe';
import { BrandLogoPipe } from './pipes/brand-logo.pipe';
import { FlagImagePipe } from './pipes/flag-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DailyRaceComponent,
    UsedCarsComponent,
    LegendCarsComponent,
    SelectorComponent,
    TrackImagePipe,
    BrandLogoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    HttpClientModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
