import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DiscoverComponent } from './discover/discover.component';
import { ContributeComponent } from './contribute/contribute.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { CountryComponent } from './country/country.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DiscoverComponent,
    ContributeComponent,
    ProductsComponent,
    AboutComponent,
    FooterComponent,
    CountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
