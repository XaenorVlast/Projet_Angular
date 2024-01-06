/* Commentaires ajoutés au code TypeScript du fichier header.component.ts */

// Importation du module 'Component' depuis Angular core
import { Component } from '@angular/core';

// Définition du composant 'HeaderComponent'
@Component({
  selector: 'app-header', // Sélecteur utilisé pour incorporer le composant
  templateUrl: './header.component.html', // Chemin vers le fichier de modèle HTML du composant
  styleUrls: ['./header.component.scss'] // Chemin vers le fichier de styles SCSS du composant
})
export class HeaderComponent {
  // Liste des onglets avec leurs étiquettes et liens associés
  navItems = [
    { label: 'Products', link: "src/app/discover"},
    { label: 'Country',  link: "src/app/country"},
    { label: 'Discover', link: "src/app/discover"},
    { label: 'Contribute', link:"src/app/contribute"},
    { label: 'Producers', link: "src/app/contribute"},
    { label: 'Sign-In', link: "src/app/Sign-In"}
  ];

  // Variable pour indiquer si la barre de navigation est ouverte ou fermée
  isNavbarOpen = false;

  // Fonction pour basculer l'état de la barre de navigation entre ouverte et fermée
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
