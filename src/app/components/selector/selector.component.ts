import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCar, faCarRear, faFlagCheckered, faGaugeHigh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, MatButtonToggleModule]
})
export class SelectorComponent {
  faCar = faCar;
  faGaugeHigh = faGaugeHigh;
  faCarRear = faCarRear;
  faFlagCheckered = faFlagCheckered;
}
