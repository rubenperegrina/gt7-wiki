import { Component } from '@angular/core';
import { Car } from '@app/models/data.model';
import { ApiService } from '@app/services/api.service';

@Component({
  selector: 'app-legend-cars',
  templateUrl: './legend-cars.component.html',
  styleUrls: ['./legend-cars.component.scss']
})
export class LegendCarsComponent {

  legendCars!: Car[];
  dataUpdate!: string;

  constructor(
    private _apiService: ApiService
  ) { 
      this.legendCars = this._apiService.data?.legend?.cars;
      this.dataUpdate = this._apiService.data?.legend?.date;
  }
}