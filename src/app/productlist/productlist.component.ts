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
  filteredProducts: Product[] = [];
  currentPage!: number;
  loading!: boolean;
  sortingOption: string = 'mostScanned';
  explorationOption: string = 'exploreProducts';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.currentPage = this.productService.currentPage;
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
  
    // Simulate a loading time of 1 second
    setTimeout(() => {
      this.productService.getProducts(this.currentPage, 8).subscribe(response => {
        this.products = response.products;
        this.loading = true;
      });
    }, 1000);
  }
  ChangePagePlus() {
    this.currentPage++;
    this.loadProducts();
  }
  ChangePageMoins() {
    if (this.currentPage === 1) {
      return;
    }
    this.currentPage--;
    this.loadProducts();
  }

}
