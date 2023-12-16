import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContributeComponent } from './contribute/contribute.component';
import { CountryComponent } from './country/country.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'src/app/Header', component: HeaderComponent },
  { path: 'src/app/About', component: AboutComponent },
  { path: 'src/app/Products', component: ProductsComponent},
  { path: 'src/app/Country', component: CountryComponent },
  { path: 'src/app/Contribute', component: ContributeComponent },
  { path: 'src/app/Discover', component: AboutComponent },
  // Ajouter d'autres composants//
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
