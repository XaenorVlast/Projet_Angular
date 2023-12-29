import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.models';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
 // styleUrls: ['./productlist.component.css'],
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  currentPage = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts(this.currentPage, 10).subscribe(response => {
      this.products = response.products;
    });
  }
  ChangePage(){
    this.currentPage++;
    this.loadProducts();
  }
}
