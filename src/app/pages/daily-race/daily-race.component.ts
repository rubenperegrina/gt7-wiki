import { Component } from '@angular/core';
import { Race } from '@app/models/data.model';
import { ApiService } from '@app/services/api.service';

@Component({
  selector: 'app-daily-race',
  templateUrl: './daily-race.component.html',
  styleUrls: ['./daily-race.component.scss']
})
export class DailyRaceComponent {

  dailyRaces!: Race[];
  dataUpdate!: string;

  constructor(
    private _apiService: ApiService
  ) { 
    setTimeout(() => {
      this.dailyRaces = this._apiService.data?.dailyrace?.races;
      this.dataUpdate = this._apiService.data?.legend?.date;
    })
  }
}
