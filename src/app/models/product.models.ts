export interface ProductResponse {
  count: number;
  page: number;
  page_count: number;
  page_size: number;
  products: Product[];
}

export interface Product {
packaging: any;
  id: string;
  product_name: string;
  brands: string;
  categories: string;
  image_url: string; 
  image_ingredients_url: string;
  generic_name: string;
  nutriscore_tags: string[]; 
  ecoscore_tags: string[]; 
  nova_groups_tags: string;
  quantity: string;
  labels: string;
  countries: string;
  origin: string;
  stores: string;
  editors_tags: string;
  nutriments:nutriments;
  ingredients_text_en: string;
  image_ingredients_small_url: string;
  image_nutrition_url: string;
  origins_old: string;
  nutrient_levels: nutrientlevels;
  nutriscore_grade: string;
}

 export interface ProductUnit {
  code: string;
  product: Product;
  status: number;
  status_verbose: string;
}

export interface nutrientlevels{
  fat: string;
  salt: string;
  saturated_fat: string;
  sugars: string;
}

export interface nutriments {
  energy_100g: number;
  energy_serving: number;
  fat_100g: number;
  fat_serving: number;
  saturated_fat_100g: number; 
  saturated_fat_serving: number;
  carbohydrates_100g: number;
  carbohydrates_serving: number;
  sugars_100g: number;
  sugars_serving: number;
  fiber_100g: number;
  fiber_serving: number;
  proteins_100g: number;
  proteins_serving: number;
  salt_100g: number;
  salt_serving: number;
  fruits_vegetables_nuts_100g_estimate: number;
}
