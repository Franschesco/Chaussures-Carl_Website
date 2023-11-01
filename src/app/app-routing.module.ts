import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./Page_Component/accueil/accueil.component";
import {ContactComponent} from "./Page_Component/contact/contact.component";
import {NosChaussuresComponent} from "./Page_Component/nos-chaussures/nos-chaussures.component";
import {AProposComponent} from "./Page_Component/apropos/apropos.component";
import {MentionlegaleComponent} from "./Page_Component/mentionlegale/mentionlegale.component";

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'noschaussures', component: NosChaussuresComponent},
  {path: 'apropos', component: AProposComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'mentionlegale', component: MentionlegaleComponent},
  {path: '**', redirectTo: 'accueil'},
];

// @ts-ignore
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
