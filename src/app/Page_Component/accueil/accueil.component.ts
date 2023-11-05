import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{

  is_little_main = false;

  constructor(
    private appComponent: AppComponent,
  ) {
  }

  ngOnInit() {
    this.refresh_tool_bar();
  }

  refresh_tool_bar(){
    if (window.outerWidth > 900) {
      this.is_little_main = false;
    } else {
      this.is_little_main = true
    }
    setTimeout(() => this.refresh_tool_bar(), 100);
  }

}
