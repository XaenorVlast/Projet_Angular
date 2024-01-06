
/* Interfaces des données JSON */

//Interface représentant la réponse des produits //
export interface ProductResponse {
  count: number; //Nombre total de produits//
  page: number; //Numéro de la page actuelle//
  page_count: number; //Nombre total de pages//
  page_size: number; //Taille page//
  products: Product[];//lien interface des produits//
}

//Interface représentant un produit //
export interface Product {
  packaging: string; //Type d'emballage//
  id: string; //Identifiant du produit//
  product_name: string; //Nom du produit//
  brands: string; //Marques associés au produit//
  categories: string; //Catégories du produit//
  image_url: string; //Image du produit//
  image_ingredients_url: string;//Image des ingrédients du produit//
  generic_name: string;//Nom générique du produit//
  nutriscore_tags: string[]; //Tags Nutri-Score du produit//
  ecoscore_tags: string[]; //Tags Eco-Score du produit//
  nova_groups_tags: string[];//Tags Nova-Groups du produit//
  quantity: string;//Quantité du produit (Litres ou Grammes)//
  labels: string;//Etiquettes du produit//
  countries: string;//Pays ou le produit est disponible //
  origin: string;//Origine du produit//
  stores: string;//Magasins ou trouver le produit//
  nutriments:nutriments;//Nutriments du produit//
  nutrient_levels: nutrientlevels;//Niveaux nutritionnels du produit//
  nutrient_levels_tags: string;//Niveaux nutritionnels//
  nutriscore_data: NutriScoreData;//Interface NutriScore Données//
  serving_size: string;//Taille de la portion du produit//
  ingredients_analysis_tags: string[];//Analyse des ingrédients//
}


//Interface représentant l'unité d'un produit //
 export interface ProductUnit {
  code: string;
  product: Product;
  status: number;
  status_verbose: string;
}

//Interface représentant les niveaux nutritionnels//
export interface nutrientlevels{
  fat: string;
  salt: string;
  saturated_fat: string;
  sugars: string;
}




//Interface représentant les nutriments//
export interface nutriments {
  energy_100g: number;//Quantité d'energie//
  energy_serving: number;
  fat_100g: number;//Quantité de graisse//
  fat_serving: number;
  saturated_fat_100g: number; //Quantité d'acide gras//
  carbohydrates_100g: number;
  carbohydrates_serving: number;
  sugars_100g: number;//Quantité de sucres//
  sugars_serving: number;
  fiber_100g: number;//Quantité de fibres//
  fiber_serving: number;
  proteins_100g: number;//Quantité de protéines//
  proteins_serving: number;
  salt_100g: number;//Quantité de sel//
  salt_serving: number;
}

//Interface représentant les données de nutriscore//
export interface NutriScoreData{
  energy: number;
  energy_points: number;
  energy_value: number;
  proteins: number;
  proteins_points: number;
  proteins_value: number;
  fiber: number;
  fiber_points: number;
  fiber_value: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
  negative_points: number;//Points négatifs//
  positive_points: number;//Points positifs//
  saturated_fat: number;
  saturated_fat_points: number;//Acide gras saturés//
  saturated_fat_value: number;
  sodium: number;//Quantité sodium//
  sugars: number;//Quantité de sucres//
  sugars_points: number;
  sugars_value: number;
  nutriscore_score: string;//Valeur nutriscore//
  sodium_points: number;
  score: number;

}
