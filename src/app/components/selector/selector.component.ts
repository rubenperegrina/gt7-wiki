import { Component, OnInit } from '@angular/core';
import { faCar, faCarRear, faFlagCheckered, faGaugeHigh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  faCar = faCar;
  faGaugeHigh = faGaugeHigh;
  faCarRear = faCarRear;
  faFlagCheckered = faFlagCheckered;
  constructor() { }

  ngOnInit(): void {
  }

}
