import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContributeComponent } from './contribute/contribute.component';
import { ProductComponent } from './product/product.component';
import { DiscoverComponent } from './discover/discover.component';
import { ProducersComponent } from './producers/producers.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './productdetail/productdetail.component';
import { ProductListComponent } from './productlist/productlist.component';

const routes: Routes = [
  { path: 'Header', component: HeaderComponent },
  { path: 'About', component: AboutComponent },
  { path: '', component: ProductListComponent },
  { path: 'Contribute', component: ContributeComponent },
  { path: 'Discover', component: DiscoverComponent },
  { path: 'Producers', component: ProducersComponent },
  { path: 'Footer', component: FooterComponent },
  { path: ':id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
