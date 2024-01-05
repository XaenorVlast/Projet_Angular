import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContributeComponent } from './contribute/contribute.component';
import { DiscoverComponent } from './discover/discover.component';
import { ProducersComponent } from './producers/producers.component';
import { ProductDetailComponent } from './productdetail/productdetail.component';
import { ProductListComponent } from './productlist/productlist.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  
  { path: '', component: AcceuilComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Product', component: ProductListComponent },
  { path: 'Country', component: CountryComponent},
  { path: 'Contribute', component: ContributeComponent },
  { path: 'Discover', component: DiscoverComponent },
  { path: 'Producers', component: ProducersComponent },
  { path: 'Product/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
