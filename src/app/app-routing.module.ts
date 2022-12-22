import { enableProdMode } from '@angular/core';
import { Routes } from '@angular/router';
import { environment } from '@env/environment';

export const routes: Routes = [
  {
    path: 'used-cars',
    title: 'Used cars',
    loadComponent: () =>
      import('../app/pages/used-cars/used-cars.component').then((c) => c.UsedCarsComponent),
  },
  {
    path: 'daily-race',
    title: 'Daily race',
    loadComponent: () =>
      import('../app/pages/daily-race/daily-race.component').then((c) => c.DailyRaceComponent),
  },
  {
    path: 'legend-cars',
    title: 'Legend cars',
    loadComponent: () =>
      import('../app/pages/legend-cars/legend-cars.component').then((c) => c.LegendCarsComponent),
  },
  {
    path: 'engine-swap',
    title: 'Engine swap',
    loadComponent: () =>
      import('../app/pages/engine-swap/engine-swap.component').then((c) => c.EngineSwapComponent),
  },
  { path: '', pathMatch: 'full', redirectTo: 'engine-swap' },
  { path: '**', pathMatch: 'full', redirectTo: 'engine-swap' },
];

if (environment.production) {
  enableProdMode();
}