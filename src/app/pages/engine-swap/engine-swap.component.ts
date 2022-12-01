import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EngineSwap } from '@app/models/engine-swap.model';
import { ApiService } from '@app/services/api.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCar, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-engine-swap',
  templateUrl: './engine-swap.component.html',
  styleUrls: ['./engine-swap.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, TranslateModule]
})
export class EngineSwapComponent implements OnInit {
  faCar = faCar;
  faCaretRight = faCaretRight;

  lastUpdate!: Date;
  engineSwap!: EngineSwap[];

  constructor(
    private _apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getEngineSwaps();
  }

  getEngineSwaps() {
    this._apiService.getEngineSwaps().subscribe((res: EngineSwap) => {
      this.engineSwap = res.engine_swaps;
      this.lastUpdate = res.last_update;
    })
  }

}
