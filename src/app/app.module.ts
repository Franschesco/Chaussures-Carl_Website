import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './Page_Component/accueil/accueil.component';
import { ToolBarComponent } from './Tiny_Component/tool-bar/tool-bar.component';
import { BootomBarComponent } from './Tiny_Component/bootom-bar/bootom-bar.component';
import { NavBarComponent } from './Tiny_Component/nav-bar/nav-bar.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { BackgroundComponent } from './Tiny_Component/background/background.component';
import { AProposComponent } from './Page_Component/apropos/apropos.component';
import { MentionlegaleComponent } from './Page_Component/mentionlegale/mentionlegale.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientModule} from "@angular/common/http";
import {MatMenuModule} from "@angular/material/menu";
import { NosmarquesComponent } from './Page_Component/nosmarques/nosmarques.component';
import { BoutiqueComponent } from './Page_Component/boutique/boutique.component';
import {ClipboardModule} from "ngx-clipboard";
import {GoogleMapsModule} from "@angular/google-maps";
import { PopUpAnnonceComponent } from './Tiny_Component/pop-up-annonce/pop-up-annonce.component';
import {
  AlertModule, CarouselCaptionComponent,
  CarouselComponent, CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent
} from "@coreui/angular";
import { ContactPopUpComponent } from './Tiny_Component/contact-pop-up/contact-pop-up.component';
import { SnackBarComponent } from './Tiny_Component/snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ToolBarComponent,
    BootomBarComponent,
    NavBarComponent,
    BackgroundComponent,
    AProposComponent,
    MentionlegaleComponent,
    NosmarquesComponent,
    BoutiqueComponent,
    PopUpAnnonceComponent,
    ContactPopUpComponent,
    SnackBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatMenuModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatSnackBarModule,
    ClipboardModule,
    GoogleMapsModule,
    AlertModule,
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
