import {Component, HostListener, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent{

  constructor(
    private router: Router,
    private appComponent: AppComponent,
  ) {
  }

  screenWidth_is_ok() : boolean {
    if (this.appComponent.screenWidth > 600) {
      return true
    } else {
      return  false
    }
  }

  contact_icon_class () {
    if (this.screenWidth_is_ok()) {
      return ('contact_icon')
    } else {
      return ('contact_icon_little')
    }
  }

  menu_icon_class () {
    if (this.screenWidth_is_ok()) {
      return ('menu_icon')
    } else {
      return ('menu_icon_little')
    }
  }
  nav_bar_buton () {
    this.appComponent.nav_bar_display = !this.appComponent.nav_bar_display;
  }
  accueil_event () {
    this.appComponent.scrool_to_top_instant();
    this.router.navigate(['/accueil'])
  }
  contact_event () {
    this.appComponent.scrool_to_top_instant();
    this.router.navigate(['/contact'])
  }
}
