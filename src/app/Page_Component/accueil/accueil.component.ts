import {Component, OnInit, HostListener, ElementRef, ViewChild} from '@angular/core';
import {AppComponent} from "../../app.component";
import { trigger, state, style, transition, animate } from '@angular/animations';

// Définissez la propriété d'état dans votre composant

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  animations: [
    trigger('carrouselAnimation', [
      state('carrousel_img0', style({ opacity: 1 })),
      state('carrousel_img1', style({ opacity: 1 })),
      state('carrousel_img2', style({ opacity: 1 })),
      state('carrousel_img3', style({ opacity: 1 })),
      state('carrousel_img4', style({ opacity: 1 })),
      transition('* => *', animate('0.5s ease-in-out')),
    ]),
  ],
})
export class AccueilComponent implements OnInit{

  is_little_main = false;
  window_height = window.innerHeight;
  index_background = 1;
  index_carrousel: number = 0;
  currentCarrouselState = 'carrousel_img0';

  constructor(
    private appComponent: AppComponent,
  ) {
  }

  ngOnInit() {
    this.window_height = window.innerHeight;
    this.refresh_tool_bar();
    this.refresh_background();
  }

  display: any;
  center: google.maps.LatLngLiteral = {lat: 48.28945429442154, lng: 7.4318882309007765};
  position_marker = {lat: 48.28945429442154, lng: 7.4318882309007765};
  zoom = 13;

  @ViewChild('GoogleMapDiv', {static: false}) private GoogleMapDiv: ElementRef<HTMLDivElement> | undefined;
  isTestDivScrolledIntoView: boolean = false;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView(){
    if (this.GoogleMapDiv){
      const rect = this.GoogleMapDiv.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isTestDivScrolledIntoView = topShown && bottomShown;
      if (this.isTestDivScrolledIntoView && !this.appComponent.pop_was_already_display) {
        this.appComponent.display_pop_up = true;
        this.appComponent.pop_was_already_display = true;
      }
    }
  }
  show_annonce_pop_up() {
    this.appComponent.display_pop_up = !this.appComponent.display_pop_up;
  }

  lockScroll() {
    // Obtenir la position actuelle de défilement
    const scrollY = window.scrollY;

    // Appliquer une classe CSS au corps de la page pour masquer le défilement
    document.body.style.overflow = 'hidden';

    // Remettre la page à la position de défilement d'origine
    window.scrollTo(0, scrollY);
  }


  get_carrousel_class() {
    if (this.index_carrousel === 0) {
      return('carrousel_img0')
    }
    if (this.index_carrousel === 1) {
      return('carrousel_img1')
    }
    if (this.index_carrousel === 2) {
      return('carrousel_img2')
    }
    if (this.index_carrousel === 3) {
      return('carrousel_img3')
    }
    if (this.index_carrousel === 4) {
      return('carrousel_img4')
    }
    return('carrousel_img0')
  }
  add_carrousel_index() {
    this.index_carrousel += 1;
    if (this.index_carrousel >= 5) {
      this.index_carrousel = 0;
    }
    this.currentCarrouselState = "carrousel_img" + this.index_carrousel.toString()
  }

  soustract_carrousel_index() {
    this.index_carrousel -= 1;
    if (this.index_carrousel <= -1) {
      this.index_carrousel = 4;
    }
    this.currentCarrouselState = "carrousel_img" + this.index_carrousel.toString()
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.center = event.latLng.toJSON();
    }
  }

  nav_bar_buton () {
    this.appComponent.nav_bar_display = !this.appComponent.nav_bar_display;
  }

  get_container() {
    if (window.outerWidth > 900) {
      return ('container');
    } else {
      return ('container_little');
    }
  }

  move_to_map() {
    const divToScrollTo = document.getElementById('google_map'); // Remplacez 'id_de_votre_div' par l'ID de votre div

    if (divToScrollTo) {
      // Obtenez la position de la div par rapport au haut de la page
      const divPosition = divToScrollTo.getBoundingClientRect().top - 150;

      // Utilisez window.scrollTo() pour faire défiler la page jusqu'à la position de la div
      window.scrollTo({
        top: divPosition,
        behavior: 'smooth' // Pour un défilement fluide, utilisez 'smooth'
      });
    }
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.display = event.latLng.toJSON();
    }
  }

  refresh_tool_bar(){
    if (window.outerWidth > 1000) {
      this.is_little_main = false;
    } else {
      this.is_little_main = true
    }
    setTimeout(() => this.refresh_tool_bar(), 100);
  }

  refresh_background(){
    this.index_background == 1
    if (this.index_background >= 4) {
      this.index_background = 0;
    }
    setTimeout(() => this.refresh_background(), 15000);
  }
}
