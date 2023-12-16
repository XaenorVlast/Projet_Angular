import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContributeComponent } from './contribute/contribute.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contribute', component: ContributeComponent },
  { path: 'country', component: CountryComponent },
  { path: 'discover', component: AboutComponent },
  // Ajouter d'autres composants//
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
