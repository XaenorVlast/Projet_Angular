export interface ProductResponse {
  count: number;
  page: number;
  page_count: number;
  page_size: number;
  products: Product[];
}

export interface Product {
  packaging: string;
  id: string;
  product_name: string;
  brands: string;
  categories: string;
  image_url: string; 
  image_ingredients_url: string;
  generic_name: string;
  nutriscore_tags: string[]; 
  ecoscore_tags: string[]; 
  nova_groups_tags: string[];
  ecoscore_data: EcoScoreData;
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
  nutrient_levels_tags: string;
  nutriscore_grade: string;
  nutriscore_data: NutriScoreData;
  serving_size: string;
  ingredients_analysis_tags: string[];
  adjustments: Adjustments;
  packagings: Packaging;
  packaging_materials: PackagingMaterials;
  packagings_materials_main: string;
  packaging_old_before_taxonomization: string;
}

export interface PackagingMaterials{
  "all":{
    weight: number;
    weight_100g: number;
    weight_percent: number; 
  }
  packagings_materials_main: {
    weight: number;
    weight_100g: number;
    weight_percent: number; 
  }
  "unknown": {
    weight: number;
    weight_100g: number;
    weight_percent: number; 
  }
}

export interface EcoScoreData{
  adjustments: Adjustments;
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

export interface Packaging{
  non_recyclable_and_non_biodegradable_materials: number;
}

export interface Adjustments{
  packaging: any;
  "packagings": {
    ecoscore_material_score: number;
    ecoscore_shape_ratio: number;
    material: string;
    material_shape : string;
    number_of_units: number;
    quantity_per_unit: string;
    quantity_per_unit_unit: string;
    quantity_per_unit_value: number;
    shape: string;
    weight_measured: number;
  }
}

export interface nutriments {
  energy_100g: number;
  energy_serving: number;
  fat_100g: number;
  fat_serving: number;
  saturated_fat_100g: number; 
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
  fruits_vegetables_nuts_colza_walnut_olive_oils: number;
  sodium: number;
  saturated_fat: string;
  saturated_fat_points: number;
  saturated_fat_serving: number;
  silica_100g: number;
  silica_serving: number;
  bicarbonate_100g: number;
  bicarbonate_serving: number;
  nitrate_100g: number;
  nitrate_serving: number;
  fluor_100g: number;
  fluor_serving: number;
  sulphate_100g: number;
  sulphate_serving: number;
  potassium_100g: number;
  potassium_serving: number;
  chloride_100g: number;
  chloride_serving: number;
  calcium_100g: number;
  calcium_serving: number;
  magnesium_100g: number;
  magnesium_serving: number;
  fruits_vegetables_nuts_estimate_from_ingredients_100g: number;
  fruits_vegetables_nuts_estimate_from_ingredients_serving: number;
}

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
  negative_points: number;
  positive_points: number;
  saturated_fat: number;
  saturated_fat_points: number;
  saturated_fat_value: number;
  sodium: number;
  sugars: number;
  sugars_points: number;
  sugars_value: number;
  nutriscore_score: string;
  sodium_points: number;
  score: number;

}
