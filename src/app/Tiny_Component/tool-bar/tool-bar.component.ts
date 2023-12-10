import {Component, HostListener, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import { DeviceDetectorService } from 'ngx-device-detector';
import {ClipboardService} from "ngx-clipboard";
import {SnackbarService} from "../../Service/snackbar.service";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent{

  a = 0
  b = 0
  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private clipboardService: ClipboardService,
    private snackBarService: SnackbarService,
  ) {
  }

  screenWidth_is_ok() : boolean {
    if (this.appComponent.screenWidth > 600) {
      return true
    } else {
      return  false
    }
  }

  open_contact() {
    this.appComponent.contact_display = !this.appComponent.contact_display;
  }

  contact_icon_class () {
    if (this.screenWidth_is_ok()) {
      return ('contact_icon')
    } else {
      return ('contact_icon_little')
    }
  }

  openGoogleMaps() {
    const address = 'Chaussures Carl, Scherwiller'; // Remplacez par l'adresse souhaitée
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  }
  nav_bar_buton () {
    this.appComponent.nav_bar_display = !this.appComponent.nav_bar_display;
  }
  accueil_event () {
    this.appComponent.scrool_to_top_instant();
    this.router.navigate(['/accueil'])
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
    this.snackBarService.open('Numéro de Téléphone copié !')
  }

  copy_mail_to_ClipBoard() {
    const mail_adresse = "chaussures.carl@outlook.fr";
    this.clipboardService.copyFromContent(mail_adresse);
    this.snackBarService.open('Adresse Mail copié !')
  }

}
