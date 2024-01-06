// Commentaires expliquant le code TypeScript Angular

// Importation des modules nécessaires depuis Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContributeComponent } from './contribute/contribute.component';
import { DiscoverComponent } from './discover/discover.component';
import { ProducersComponent } from './producers/producers.component';
import { ProductDetailComponent } from './productdetail/productdetail.component';
import { ProductListComponent } from './productlist/productlist.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CountryComponent } from './country/country.component';

// Définition des routes de l'application
const routes: Routes = [
  { path: '', component: AccueilComponent }, // Route par défaut, pointant vers le composant AcceuilComponent
  { path: 'About', component: AboutComponent }, // Route pour le composant AboutComponent
  { path: 'Product', component: ProductListComponent }, // Route pour le composant ProductListComponent
  { path: 'Country', component: CountryComponent }, // Route pour le composant CountryComponent
  { path: 'Contribute', component: ContributeComponent }, // Route pour le composant ContributeComponent
  { path: 'Discover', component: DiscoverComponent }, // Route pour le composant DiscoverComponent
  { path: 'Producers', component: ProducersComponent }, // Route pour le composant ProducersComponent
  { path: 'Product/:id', component: ProductDetailComponent } // Route pour le composant ProductDetailComponent avec un paramètre d'identifiant
];

// Déclaration d'un module Angular pour configurer les routes de l'application
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuration des routes dans le module
  exports: [RouterModule], // Exportation du module de routage pour utilisation dans d'autres modules
})
export class AppRoutingModule {}
