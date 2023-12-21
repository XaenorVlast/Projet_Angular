/*Module*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
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
import { CountryComponent } from './country/country.component';
import { ProductDetailComponent } from './productdetail/productdetail.component';
import { ProductLetterComponent } from './productletter/productletter.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent?
    ContributeComponent,
    CountryComponent,
    DiscoverComponent,
    FooterComponent,
    HeaderComponent,
    ProducersComponent,
    ProductComponent,
    ProductLetterComponent,
    ProductListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
