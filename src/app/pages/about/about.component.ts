import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SelectorComponent } from '@app/components/selector/selector.component';
import { faDatabase, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, SelectorComponent]
})
export class AboutComponent {
  faDatabase = faDatabase;
  faFileCode = faFileCode;
}