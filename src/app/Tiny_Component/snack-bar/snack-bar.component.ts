import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {ClipboardService} from "ngx-clipboard";
import {SnackbarService} from "../../Service/snackbar.service";

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit{

  mail_index = 0
  phone_index = 0
  mail: boolean = this.appComponent.snack_bar_mail_display
  phone: boolean = this.appComponent.snack_bar_phone_display

  constructor(
      private appComponent: AppComponent,
  ) {}

  ngOnInit() {
    this.refresh_snack_bar();
  }

  refresh_snack_bar(){
    this.mail = this.appComponent.snack_bar_mail_display;
    this.phone = this.appComponent.snack_bar_phone_display;
    if (this.appComponent.snack_bar_mail_display && this.mail_index === 0) {
      this.mail_index = 1;
      setTimeout(() => this.set_mail_false(), 2000);
    }
    if (this.appComponent.snack_bar_phone_display && this.phone_index === 0) {
      this.phone_index = 1;
      setTimeout(() => this.set_phone_false(), 2000);
    }
    setTimeout(() => this.refresh_snack_bar(), 100);
  }

  set_mail_false() {
    this.mail_index = 0;
    this.mail = false;
    this.appComponent.snack_bar_mail_display = false;
  }

  set_phone_false() {
    this.phone_index = 0;
    this.phone = false;
    this.appComponent.snack_bar_phone_display = false;
  }

  close_pop_up() {
    this.appComponent.snack_bar_mail_display = false;
    this.appComponent.snack_bar_phone_display = false;
  }

}
