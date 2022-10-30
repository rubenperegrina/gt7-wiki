import { Component } from '@angular/core';
import { Car } from '@app/models/data.model';
import { ApiService } from '@app/services/api.service';

@Component({
  selector: 'app-used-cars',
  templateUrl: './used-cars.component.html',
  styleUrls: ['./used-cars.component.scss']
})
export class UsedCarsComponent {

  usedCars!: Car[];
  dataUpdate!: string;

  constructor(
    private _apiService: ApiService
  ) { 
    setTimeout(() => {
      this.usedCars = this._apiService.data?.used?.cars
      this.dataUpdate = this._apiService.data?.legend?.date;
    })
  }
}
