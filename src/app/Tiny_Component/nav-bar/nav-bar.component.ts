import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router,
      private appComponent: AppComponent,
  ) {}

  ngOnInit() {
    this.lockScroll();
  }

  lockScroll() {
    // Obtenir la position actuelle de défilement
    const scrollY = window.scrollY;

    // Appliquer une classe CSS au corps de la page pour masquer le défilement
    document.body.style.overflow = 'hidden';

    // Remettre la page à la position de défilement d'origine
    window.scrollTo(0, scrollY);
  }

  unlockScroll() {
    // Supprimer la classe CSS pour rétablir le défilement
    document.body.style.overflow = 'auto';
  }

  nav_bar_animation() {
    if (this.appComponent.nav_bar_display) {
      return ('nav_bar_start');
    } else {
      return ('nav_bar_end');
    }
  }
  close_nav_bar () {
    this.unlockScroll();
    this.appComponent.nav_bar_display = !this.appComponent.nav_bar_display;
  }

  openGoogleMaps() {
    const address = 'Chaussures Carl, Scherwiller'; // Remplacez par l'adresse souhaitée
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  }

  naviguate_to_accueil() {
    this.close_nav_bar();
    this.appComponent.scrool_to_top_instant();
    this.router.navigate(['/accueil'])
  }

  naviguate_to_nos_marques() {
    this.close_nav_bar();
    this.appComponent.scrool_to_top_instant();
    this.router.navigate(['/nosmarques'])
  }

  naviguate_to_a_propos() {
    this.close_nav_bar();
    this.appComponent.scrool_to_top_instant();
    this.router.navigate(['/apropos'])
  }

  naviguate_to_boutique() {
    this.close_nav_bar();
    this.appComponent.scrool_to_top_instant();
    this.router.navigate(['/boutique'])
  }

  naviguate_to_mention_legale() {
    this.close_nav_bar();
    this.appComponent.scrool_to_top_instant();
    this.router.navigate(['/mentionlegale'])
  }

}
