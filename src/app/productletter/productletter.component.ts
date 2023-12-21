import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Product } from '../product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productletter',
  templateUrl: './productletter.component.html',
  styleUrls: ['./productletter.component.css'],
})
export class ProductLetterComponent implements OnInit {
  products: Product[] = [];

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('letter') || ''),
        switchMap((letter: string) => this.productService.getProductFirstLetter(letter))
      )
      .subscribe((products) => (this.products = products));
  }
}
