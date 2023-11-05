import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./Page_Component/accueil/accueil.component";
import {AProposComponent} from "./Page_Component/apropos/apropos.component";
import {MentionlegaleComponent} from "./Page_Component/mentionlegale/mentionlegale.component";
import {NosmarquesComponent} from "./Page_Component/nosmarques/nosmarques.component";
import {BoutiqueComponent} from "./Page_Component/boutique/boutique.component";

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'nosmarques', component: NosmarquesComponent},
  {path: 'apropos', component: AProposComponent},
  {path: 'boutique', component: BoutiqueComponent},
  {path: 'mentionlegale', component: MentionlegaleComponent},
  {path: '**', redirectTo: 'accueil'},
];

// @ts-ignore
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
