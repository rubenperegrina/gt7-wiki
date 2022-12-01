import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Race } from '@app/models/data.model';
import { FlagImagePipe } from '@app/pipes/flag-image.pipe';
import { FormatDatePipe } from '@app/pipes/format-date.pipe';
import { TrackImagePipe } from '@app/pipes/track-image.pipe';
import { ApiService } from '@app/services/api.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-daily-race',
  templateUrl: './daily-race.component.html',
  styleUrls: ['./daily-race.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, TrackImagePipe, FlagImagePipe, FormatDatePipe]
})
export class DailyRaceComponent {

  dailyRaces!: Race[];
  dataUpdate!: string;

  constructor(
    public _apiService: ApiService
  ) {
    this.dailyRaces = this._apiService.data?.dailyrace?.races;
    this.dataUpdate = this._apiService.data?.dailyrace?.date;
  }
}
