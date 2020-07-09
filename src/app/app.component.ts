import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showMenu = false;
  darkModeActive = false;
  constructor() {}

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
  modeToggleSwitch(): void {
    this.darkModeActive = !this.darkModeActive;
  }
}


