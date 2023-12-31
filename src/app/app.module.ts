/*Module*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DiscoverComponent } from './discover/discover.component';
import { ContributeComponent } from './contribute/contribute.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './productlist/productlist.component';
import { ProducersComponent } from './producers/producers.component';
import { ProductDetailComponent } from './productdetail/productdetail.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContributeComponent,
    DiscoverComponent,
    FooterComponent,
    HeaderComponent,
    ProducersComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent,
    AcceuilComponent,
    CountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
