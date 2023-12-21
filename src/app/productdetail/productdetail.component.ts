import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  cocktail: any | null = null;
  alcoholic!: string;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => this.productService.getProductById(params.get('id') || ''))
      )
      .subscribe((cocktail) => {
        this.cocktail = cocktail;
        this.alcoholic = cocktail.alcoholic ? 'assets/invalid.png' : 'assets/valid.png';
      });
  }
}
<router-outlet></router-outlet>