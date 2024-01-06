// Importation des modules nécessaires depuis Angular
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.models';
import { ProductService } from '../services/product.service';

// Déclaration du composant avec le sélecteur 'app-productlist', le modèle HTML et les styles associés
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductListComponent implements OnInit {

  // Propriétés pour stocker la liste de produits, les produits filtrés, la page actuelle, l'état de chargement, et les options de tri/exploration
  products!: Product[];
  filteredProducts: Product[] = [];
  currentPage!: number;
  loading!: boolean;
  sortingOption: string = 'mostScanned';
  explorationOption: string = 'exploreProducts';

  // Constructeur du composant, injecte le service ProductService
  constructor(private productService: ProductService) { }

  // Méthode du cycle de vie du composant appelée lors de son initialisation
  ngOnInit(): void {

    // Appel de la méthode pour charger les produits
    this.currentPage=1;
    this.loadProducts();
  }

  // Méthode pour charger les produits depuis le service ProductService
  loadProducts(): void {
    this.productService.getProducts(this.currentPage, 8).subscribe(response => {
   this.products = response.products;

 });
}
  
  // Méthode pour passer à la page suivante
  ChangePagePlus() {
    this.currentPage++;
    // Appel de la méthode pour charger les produits de la nouvelle page
    this.loadProducts();
  }

  // Méthode pour revenir à la page précédente
  ChangePageMoins() {
    // Vérification pour éviter d'aller en dessous de la première page
    if (this.currentPage === 1) {
      return;
    }
    // Décrémentation de la page actuelle et appel de la méthode pour charger les produits de la nouvelle page
    this.currentPage--;
    this.loadProducts();
  }
}
