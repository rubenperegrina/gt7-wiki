import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';

import { AppComponent } from './app.component';
import { SelectorComponent } from './components/selector/selector.component';
import { SharedModule } from './modules/shared/shared.module';
import { AboutComponent } from './pages/about/about.component';
import { DailyRaceComponent } from './pages/daily-race/daily-race.component';
import { EngineSwapComponent } from './pages/engine-swap/engine-swap.component';
import { LegendCarsComponent } from './pages/legend-cars/legend-cars.component';
import { UsedCarsComponent } from './pages/used-cars/used-cars.component';

import { BrandLogoPipe } from './pipes/brand-logo.pipe';
import { TrackImagePipe } from './pipes/track-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DailyRaceComponent,
    UsedCarsComponent,
    LegendCarsComponent,
    SelectorComponent,
    TrackImagePipe,
    BrandLogoPipe,
    AboutComponent,
    EngineSwapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
