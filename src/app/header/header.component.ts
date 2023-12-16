// Code TypeScript du fichier header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navItems = [
    { label: 'Products', link: "src/app/discover"},
    { label: 'Country',  link: "src/app/country"},
    { label: 'Discover', link: "src/app/discover"},
    { label: 'Contribute', link:"src/app/contribute"},
    { label: 'Contact', link: '#' }
  ];

  isNavbarOpen = false;

  // Liste des pays
  countries = [
    { label: 'Country 1', link: '/country/1' },
    { label: 'Country 2', link: '/country/2' },
    // Ajoute d'autres pays selon tes besoins
  ];

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
