import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SelectorComponent } from './components/selector/selector.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AboutComponent } from './pages/about/about.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ToolbarComponent, SelectorComponent, AboutComponent, FooterComponent]
})
export class AppComponent {

  constructor(
    private _apiService: ApiService
  ) { this.getData(); }

  getData() {
    this._apiService.getData().subscribe();
  }
}