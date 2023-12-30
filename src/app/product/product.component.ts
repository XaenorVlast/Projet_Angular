import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.models';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  constructor(private router :Router) {}
  ngOnInit(): void {}
  choisirProduit() {
    this.router.navigateByUrl(`Product/${this.product.id}`);
  }
}


