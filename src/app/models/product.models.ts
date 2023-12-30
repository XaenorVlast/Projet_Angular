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
 }

 export interface ProductUnit {
  code: string;
  product: Product;
  status: number;
  status_verbose: string;
}