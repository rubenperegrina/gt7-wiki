import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyRaceComponent } from './pages/daily-race/daily-race.component';
import { EngineSwapComponent } from './pages/engine-swap/engine-swap.component';
import { LegendCarsComponent } from './pages/legend-cars/legend-cars.component';
import { UsedCarsComponent } from './pages/used-cars/used-cars.component';

const routes: Routes = [
  {
    path: 'used-cars',
    component: UsedCarsComponent
  },
  {
    path: 'daily-race',
    component: DailyRaceComponent
  },
  {
    path: 'legend-cars',
    component: LegendCarsComponent
  },
  {
    path: 'engine-swap',
    component: EngineSwapComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'engine-swap' },
  { path: '**', pathMatch: 'full', redirectTo: 'engine-swap' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
