import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-bootom-bar',
  templateUrl: './bootom-bar.component.html',
  styleUrls: ['./bootom-bar.component.scss']
})
export class BootomBarComponent {

  constructor(
    private router: Router,
    private appComponent: AppComponent,
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

  naviguate_to_mention_legale() {
    this.appComponent.scrool_to_top_instant();
    this.router.navigate(['/mentionlegale'])
  }

}
