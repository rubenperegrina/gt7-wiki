import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Car } from '@app/models/data.model';
import { FlagImagePipe } from '@app/pipes/flag-image.pipe';
import { FormatDatePipe } from '@app/pipes/format-date.pipe';
import { TrackImagePipe } from '@app/pipes/track-image.pipe';
import { ApiService } from '@app/services/api.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-used-cars',
  templateUrl: './used-cars.component.html',
  styleUrls: ['./used-cars.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, TrackImagePipe, FlagImagePipe, FormatDatePipe]
})
export class UsedCarsComponent {

  usedCars!: Car[];
  dataUpdate!: string;

  constructor(
    private _apiService: ApiService
  ) {
    this.usedCars = this._apiService.data?.used?.cars
    this.dataUpdate = this._apiService.data?.used?.date;
  }
}