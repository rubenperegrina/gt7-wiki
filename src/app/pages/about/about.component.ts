import { Component } from '@angular/core';
import { faDatabase, faFileCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  faDatabase = faDatabase;
  faFileCode = faFileCode;
}
