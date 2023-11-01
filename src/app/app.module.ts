import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './Page_Component/accueil/accueil.component';
import { ContactComponent } from './Page_Component/contact/contact.component';
import { ToolBarComponent } from './Tiny_Component/tool-bar/tool-bar.component';
import { BootomBarComponent } from './Tiny_Component/bootom-bar/bootom-bar.component';
import { NavBarComponent } from './Tiny_Component/nav-bar/nav-bar.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { BackgroundComponent } from './Tiny_Component/background/background.component';
import { NosChaussuresComponent } from './Page_Component/nos-chaussures/nos-chaussures.component';
import { AProposComponent } from './Page_Component/apropos/apropos.component';
import { MentionlegaleComponent } from './Page_Component/mentionlegale/mentionlegale.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientModule} from "@angular/common/http";
import {MatMenuModule} from "@angular/material/menu";
import {GoogleMapsModule} from "@angular/google-maps";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ContactComponent,
    ToolBarComponent,
    BootomBarComponent,
    NavBarComponent,
    BackgroundComponent,
    NosChaussuresComponent,
    AProposComponent,
    MentionlegaleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    MatTabsModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
