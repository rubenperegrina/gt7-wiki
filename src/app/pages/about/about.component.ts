import { Component, OnInit } from '@angular/core';
import { faDatabase, faFileCode } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faDatabase = faDatabase;
  faFileCode = faFileCode;
  constructor() { }

  ngOnInit(): void {
  }

}
