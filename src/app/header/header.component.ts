// Code TypeScript du fichier header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
openSignIn() {
throw new Error('Method not implemented.');
}
  navItems = [
    { label: 'Products', link: "src/app/discover"},
    { label: 'Country',  link: "src/app/country"},
    { label: 'Discover', link: "src/app/discover"},
    { label: 'Contribute', link:"src/app/contribute"},
    { label: 'Producers', link: "src/app/contribute"},
    { label: 'Sign-In', link: "src/app/Sign-In"}

  ];

  isNavbarOpen = false;

  // Liste des pays 
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
