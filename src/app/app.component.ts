import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  screenWidth = 0;
  nav_bar_display : boolean = false;
  size_little = 1000;

  scrool_to_top_instant() {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }

  ngOnInit() {
    this.refresh_tool_bar();
  }

  refresh_tool_bar(){
    this.screenWidth = window.outerWidth;
    setTimeout(() => this.refresh_tool_bar(), 100);
  }
}
