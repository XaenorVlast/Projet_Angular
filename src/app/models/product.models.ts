export interface ProductResponse {
  count: number;
  page: number;
  page_count: number;
  page_size: number;
  products: Product[];
}

export interface Product {
  id: string;
  product_name: string;
  brands: string;
  categories: string;
  image_url: string; 
  generic_name: string;
  nutriscore_tags: string[]; 
  ecoscore_tags: string[]; 
  quantity: string;
  packaging: string;
  labels: string;
  countries: string;
  ingredients_text: string;
  allergens: string;
  traces: string;
  serving_size: string;
  nutrition_grade_fr: string;
  nutrient_levels: any; // Replace 'any' with a more specific type if possible
  energy_100g: number;
  energy_serving: number;
  fat_100g: number;
  fat_serving: number;
  saturated_fat_100g: number; // Corrected the naming convention from saturated-fat_100g
  saturated_fat_serving: number; // Corrected the naming convention from saturated-fat_serving
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

 export interface ProductUnit {
  code: string;
  product: Product;
  status: number;
  status_verbose: string;
}