import { Component } from '@angular/core';
import {AppComponent} from "../../app.component";
import {Router} from "@angular/router";
import {ClipboardService} from "ngx-clipboard";
import {SnackbarService} from "../../Service/snackbar.service";

@Component({
  selector: 'app-contact-pop-up',
  templateUrl: './contact-pop-up.component.html',
  styleUrls: ['./contact-pop-up.component.scss']
})
export class ContactPopUpComponent {

  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private clipboardService: ClipboardService,
    private snackBarService: SnackbarService,
  ) {}

  close_pop_up() {
    this.appComponent.contact_display = !this.appComponent.contact_display;
  }

  naviguate_to_facebook() {
    const externalSiteUrl = 'https://www.facebook.com/p/Chaussures-Carl-100063660907948/?locale=fr_FR'; // Remplacez par l'URL du site externe
    window.open(externalSiteUrl, '_blank');
  }
  naviguate_to_instagram() {
    const externalSiteUrl = 'https://instagram.com/carl_chaussures?igshid=OGQ5ZDc2ODk2ZA=='; // Remplacez par l'URL du site externe
    window.open(externalSiteUrl, '_blank');
  }

  copy_phone_to_ClipBoard() {
    const phone_number = "03 88 92 15 48";
    this.clipboardService.copyFromContent(phone_number);
    this.appComponent.snack_bar_mail_display = false;
    this.appComponent.snack_bar_phone_display = true;
  }

  copy_mail_to_ClipBoard() {
    const mail_adresse = "chaussures.carl@outlook.fr";
    this.clipboardService.copyFromContent(mail_adresse);
    this.appComponent.snack_bar_phone_display = false;
    this.appComponent.snack_bar_mail_display = true;
  }

  openGoogleMaps() {
    const address = 'Chaussures Carl, Scherwiller'; // Remplacez par l'adresse souhaitée
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  }
}
