import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.models';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
   styleUrls: ['./productlist.component.scss'],
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  currentPage!: number;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.currentPage = this.productService.currentPage;
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts(this.currentPage, 8).subscribe(response => {
      this.products = response.products;
    });
  }
  ChangePagePlus() {
    this.currentPage++;
    this.loadProducts();
  }
  ChangePageMoin() {
    if (this.currentPage === 1) {
      return;
    }
    this.currentPage--;
    this.loadProducts();
  }
}
