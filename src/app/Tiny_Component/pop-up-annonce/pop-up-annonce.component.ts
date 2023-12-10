import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-pop-up-annonce',
  templateUrl: './pop-up-annonce.component.html',
  styleUrls: ['./pop-up-annonce.component.scss']
})
export class PopUpAnnonceComponent implements OnInit{

  displayPopUp: boolean = false;

  constructor(
    private appComponent: AppComponent,
  ) {
  }

  ngOnInit() {
    this.refresh_pop_up();
  }

  refresh_pop_up(){
    this.displayPopUp = this.appComponent.display_pop_up;
    if (this.displayPopUp) {
      this.lockScroll();
    }
    setTimeout(() => this.refresh_pop_up(), 100);
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

  close_pop_up() {
    this.unlockScroll();
    this.appComponent.display_pop_up = !this.appComponent.display_pop_up;
  }
}
