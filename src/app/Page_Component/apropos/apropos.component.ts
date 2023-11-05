import { Component } from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.scss']
})
export class AProposComponent {

  constructor(
    private appComponent: AppComponent,
  ) {
  }

  get_apropos_div() {
    if (window.outerWidth > this.appComponent.size_little) {
      return ('apropos');
    } else {
      return ('apropos_little');
    }
  }

  get_first_left_div() {
    if (window.outerWidth > this.appComponent.size_little) {
      return ('first_left');
    } else {
      return ('first_left_little');
    }
  }

  its_big() {
    if (window.outerWidth > this.appComponent.size_little) {
      return true;
    } else {
      return false;
    }
  }

}
