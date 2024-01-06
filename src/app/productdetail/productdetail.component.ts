import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product} from '../models/product.models';

// Définition du composant Angular avec son sélecteur, son modèle de vue et ses styles
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

    // Injection des dépendances nécessaires dans le constructeur
  constructor(private productService: ProductService, private route: ActivatedRoute, private router : Router) {}

    // Propriété d'entrée pour recevoir le produit depuis le composant parent
    @Input() product!: Product;
    
    // Propriétés pour stocker les niveaux de nutriments, images, scores, etc.
    nutrientlevel: any;
    imagenutrientlevel: any;
    nutriscore: any;
    novagroup: any;
    ecoscore: any;

    // Propriétés booléennes pour gérer la visibilité de certaines sections
    isNovaGroupVisible = false;
    isNutriscoreVisible = false;
    isingredientanalysispalmoil = false;
    isingredientanalysisvegan = false;
    isingredientanalysisvegetarian = false;
    isPackagingParts = false;
    isingredientanalysis = false;

    // Méthode appelée lors de l'initialisation du composant
    ngOnInit(): void {
      const Id = +this.route.snapshot.params['id'];
      // Appel de différentes méthodes pour choisir et afficher les niveaux de nutriments, les images, etc.
      // Chargement des détails du produit à partir du service
      this.loadProductsUnit(Id);
      this.choisirNutrientFatLevel();
      this.choisirNutrientSaltLevel();
      this.choisirNutrientSaturatedFatLevel();
      this.choisirNutrientSugarLevel();
      this.choisirImageNovaGroup();
    }

    // Méthodes pour choisir les niveaux de nutriments en fonction du produit

        // Logique pour déterminer le niveau de gras
    choisirNutrientFatLevel() {
      if (this.product.nutrient_levels.fat === 'low') {
        this.nutrientlevel = "low";
      }
      if (this.product.nutrient_levels.fat === 'moderate') {
        this.nutrientlevel = "moderate";
      }
      if (this.product.nutrient_levels.fat === 'high') {
        this.nutrientlevel = "high";
      }
    }

        // Logique pour déterminer le niveau de gras saturés
    choisirNutrientSaturatedFatLevel() {
      
      if (this.product.nutrient_levels.saturated_fat === 'low') {
        this.nutrientlevel = "low";
      }
      if (this.product.nutrient_levels.saturated_fat === 'moderate') {
        this.nutrientlevel = "moderate";
      }
      if (this.product.nutrient_levels.saturated_fat === 'high') {
        this.nutrientlevel = "high";
      }
   }

       // Logique pour déterminer le niveau de sel
choisirNutrientSugarLevel() {
  if (this.product.nutrient_levels.sugars === 'low') {
    this.nutrientlevel = "low";
  }
  if (this.product.nutrient_levels.sugars === 'moderate') {
    this.nutrientlevel = "moderate";
  }
  if (this.product.nutrient_levels.sugars === 'high') {
    this.nutrientlevel = "high";
  }
}


    // Logique pour déterminer le niveau de sel
choisirNutrientSaltLevel() {
  if (this.product.nutrient_levels.salt === 'low') {
    this.nutrientlevel = "low";
  }
  if (this.product.nutrient_levels.salt === 'moderate') {
    this.nutrientlevel = "moderate";
  }
  if (this.product.nutrient_levels.salt === 'high') {
    this.nutrientlevel = "high";
  }
}

  // Méthode pour choisir l'image de groupe Nova en fonction du produit

choisirImageNovaGroup() {
  if (this.product.nova_groups_tags[0] === 'en:1-unprocessed-or-minimally-processed-foods') {
    this.novagroup = 'https://static.openfoodfacts.org/images/attributes/dist/nova-group-1.svg'
  }
  if (this.product.nova_groups_tags[0] === 'en:2-processed-culinary-ingredients') {
    this.novagroup = 'https://static.openfoodfacts.org/images/attributes/dist/nova-group-2.svg'
  }
  if (this.product.nova_groups_tags[0] === 'en:3-processed-foods') {
    this.novagroup = 'https://static.openfoodfacts.org/images/attributes/dist/nova-group-3.svg'
  }
  if (this.product.nova_groups_tags[0] === 'en:4-ultra-processed-food-and-drink-products') {
    this.novagroup = 'https://static.openfoodfacts.org/images/attributes/dist/nova-group-4.svg'
  }
}


  // Méthode pour charger les détails du produit depuis le service
loadProductsUnit(Id:number): void {
  this.productService.GetProductById(Id).subscribe(response => {
    this.product = response.product;
  });
}

  // Méthode pour retourner à la page d'accueil
returnAcceuil() {
  this.router.navigateByUrl(`/Product`);
}



  // Méthodes pour basculer la visibilité de différentes sections
toggleNovaGroup() {
  this.isNovaGroupVisible = !this.isNovaGroupVisible;
}

toggleNutriscore() {
  this.isNutriscoreVisible = !this.isNutriscoreVisible;
}

toggleingredientanalysispalmoil() {
  this.isingredientanalysispalmoil = !this.isingredientanalysispalmoil;
}

toggleingredientanalysisvegan() {
  this.isingredientanalysisvegan = !this.isingredientanalysisvegan;
}

toggleingredientanalysisvegetarian() {
  this.isingredientanalysisvegetarian = !this.isingredientanalysisvegetarian;
}

togglePackagingParts(){
  this.isPackagingParts = !this.isPackagingParts;
}
 
  
}
