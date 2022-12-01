import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Car } from '@app/models/data.model';
import { FlagImagePipe } from '@app/pipes/flag-image.pipe';
import { FormatDatePipe } from '@app/pipes/format-date.pipe';
import { TrackImagePipe } from '@app/pipes/track-image.pipe';
import { ApiService } from '@app/services/api.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-legend-cars',
  templateUrl: './legend-cars.component.html',
  styleUrls: ['./legend-cars.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, TrackImagePipe, FormatDatePipe, FlagImagePipe]
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