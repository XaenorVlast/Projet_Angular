import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.models';


//Déclaration du composant app-product//
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})



export class ProductComponent implements OnInit {
  @Input() product!: Product;//Propriété d'entrée pour recevoir les données du produit depuis le composant parent//
  nutriscore: any;//propriété nutriscore//
  ecoscore: any;//Propriété ecoscore//
  novagroup: any;//Propriété NovaGroup //


  // Constructeur du composant, injecte le service de routage (Router)
  constructor(private router :Router) {}
  
  // Méthode du cycle de vie du composant appelée lors de son initialisation
  ngOnInit(): void {
    this.choisirImageNutriScore();//Fonction pour choisir l'image correspondant au nutri-score//
    this.choisirImageEcoScore();//Fonction pour choisir l'image correspondant à l'eco-score//
  }

  //Fonction pour choisir le produit et l'afficher avec son identifiant//
  choisirProduit() {
    this.router.navigateByUrl(`Product/${this.product.id}`);
  }

  
  //Fonction pour choisir l'image du nutriscore correspondant//
  choisirImageNutriScore() {
    if (this.product.nutriscore_tags[0] === 'a') {
      this.nutriscore = 'https://static.openfoodfacts.org/images/attributes/dist/nutriscore-a.svg'//SI le nutriscore est égale à A, on affiche l'image nutriscore A
    }
    if (this.product.nutriscore_tags[0] === 'b') {
      this.nutriscore = 'https://static.openfoodfacts.org/images/attributes/dist/nutriscore-b.svg' //SI le nutriscore est égale à B , on affiche l'image nutriscore B
    }
    if (this.product.nutriscore_tags[0] === 'c') {
      this.nutriscore = 'https://static.openfoodfacts.org/images/attributes/dist/nutriscore-c.svg' //SI le nutriscore est égale à C, on affiche l'image nutriscore C
    }
    if (this.product.nutriscore_tags[0] === 'd') {
      this.nutriscore = 'https://static.openfoodfacts.org/images/attributes/dist/nutriscore-d.svg' //SI le nutriscore est égale à D, on affiche l'image nutriscore D
    }
    if (this.product.nutriscore_tags[0] === 'e') {
      this.nutriscore = 'https://static.openfoodfacts.org/images/attributes/dist/nutriscore-e.svg' //SI le nutriscore est égale à E, on affiche l'image nutriscore E
    }
  }


  // Fonction pour choisir l'image d'Eco-Score//
  choisirImageEcoScore() {
    if (this.product.ecoscore_tags[0] === "not-applicable") {
      this.ecoscore = 'https://static.openfoodfacts.org/images/attributes/dist/ecoscore-not-applicable.svg' //Si pas d'eco-score on affiche une image eco-score non applicable//
    }
    if (this.product.ecoscore_tags[0] === "a") {
      this.ecoscore = 'https://static.openfoodfacts.org/images/attributes/dist/ecoscore-a.svg'// Si l'ecoscore est de A, on affiche l'image ecoscore A//
    }
    if (this.product.ecoscore_tags[0] === "b") {
      this.ecoscore = 'https://static.openfoodfacts.org/images/attributes/dist/ecoscore-b.svg' // Si l'ecoscore est de B, on affiche l'image ecoscore B//
    }
    if(this.product.ecoscore_tags[0]==="c"){
      this.ecoscore='https://static.openfoodfacts.org/images/attributes/dist/ecoscore-c.svg' // Si l'ecoscore est de C, on affiche l'image ecoscore C//
    }
    if(this.product.ecoscore_tags[0]==="d"){
      this.ecoscore='https://static.openfoodfacts.org/images/attributes/dist/ecoscore-d.svg' // Si l'ecoscore est de D, on affiche l'image ecoscore D//
    }
    if(this.product.ecoscore_tags[0]==="e"){
      this.ecoscore='https://static.openfoodfacts.org/images/attributes/dist/ecoscore-e.svg' // Si l'ecoscore est de E, on affiche l'image ecoscore E//
    }
  }
}