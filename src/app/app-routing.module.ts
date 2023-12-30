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
import { ProductLetterComponent } from './productletter/productletter.component';
import { ProductListComponent } from './productlist/productlist.component';

const routes: Routes = [
  { path: 'src/app/Header', component: HeaderComponent },
  { path: 'src/app/About', component: AboutComponent },
  { path: 'src/app/Product', component: ProductListComponent },
  { path: 'src/app/Product', component: ProductComponent },
  { path: 'src/app/Contribute', component: ContributeComponent },
  { path: 'src/app/Discover', component: DiscoverComponent },
  { path: 'src/app/Producers', component: ProducersComponent },
  { path: 'src/app/Footer', component: FooterComponent },
  { path: 'src/app/Products/:id/detail', component: ProductDetailComponent },
  { path: 'src/app/Products/:letter', component: ProductLetterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
