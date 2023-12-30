import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
 // styleUrls: ['./productdetail.component.css'],
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

ngOnInit(){
  const faceSnapId = +this.route.snapshot.params['id'];
  this.loadProductsUnit(faceSnapId);
}
constructor(private productService: ProductService,
  private route: ActivatedRoute, private router : Router) {}

loadProductsUnit(faceSnapId:number): void {
  this.productService.GetProductById(faceSnapId).subscribe(response => {
    this.product = response.product;
  });
}
returnAcceuil() {
  this.router.navigateByUrl(`/Product`);
}
}
