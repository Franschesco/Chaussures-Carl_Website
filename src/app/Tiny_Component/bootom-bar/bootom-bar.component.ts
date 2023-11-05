import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {ClipboardService} from "ngx-clipboard";
import {SnackbarService} from "../../Service/snackbar.service";

@Component({
  selector: 'app-bootom-bar',
  templateUrl: './bootom-bar.component.html',
  styleUrls: ['./bootom-bar.component.scss']
})
export class BootomBarComponent {

  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private clipboardService: ClipboardService,
    private snackBarService: SnackbarService,
  ) {
  }

  naviguate_to_accueil() {
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

  naviguate_to_mention_legale() {
    this.appComponent.scrool_to_top_instant();
    this.router.navigate(['/mentionlegale'])
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

  get_main_info_div() {
    if (window.outerWidth > 540) {
      return ('main_info_div')
    } else {
      return ('main_info_div_little')
    }
  }

}
