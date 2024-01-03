import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product} from '../models/product.models';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss'],
})
export class ProductDetailComponent implements OnInit {


  constructor(private productService: ProductService,
    private route: ActivatedRoute, private router : Router) {}
    @Input() product!: Product;
    nutrientlevel: any;
    imagenutrientlevel: any;
    nutriscore: any;


    ngOnInit(): void {
      const Id = +this.route.snapshot.params['id'];
      this.loadProductsUnit(Id);
      this.choisirNutrientFatLevel();
      this.choisirNutrientSaltLevel();
      this.choisirNutrientSaturatedFatLevel();
      this.choisirNutrientSugarLevel();
    
    }

choisirNutrientFatLevel() {
  if (this.product.nutrient_levels.fat === 'low') {
    this.nutrientlevel = "low";
  }
  if (this.product.nutrient_levels.fat === 'moderate') {
    this.nutrientlevel = "moderate";
  }
  if (this.product.nutrient_levels.fat === 'high') {
    this.nutrientlevel = "high";
  }
}


choisirNutrientSaturatedFatLevel() {
  if (this.product.nutrient_levels.saturated_fat === 'low') {
    this.nutrientlevel = "low";
  }
  if (this.product.nutrient_levels.saturated_fat === 'moderate') {
    this.nutrientlevel = "moderate";
  }
  if (this.product.nutrient_levels.saturated_fat === 'high') {
    this.nutrientlevel = "high";
  }
}

choisirNutrientSugarLevel() {
  if (this.product.nutrient_levels.sugars === 'low') {
    this.nutrientlevel = "low";
  }
  if (this.product.nutrient_levels.sugars === 'moderate') {
    this.nutrientlevel = "moderate";
  }
  if (this.product.nutrient_levels.sugars === 'high') {
    this.nutrientlevel = "high";
  }
}

choisirNutrientSaltLevel() {
  if (this.product.nutrient_levels.salt === 'low') {
    this.nutrientlevel = "low";
  }
  if (this.product.nutrient_levels.salt === 'moderate') {
    this.nutrientlevel = "moderate";
  }
  if (this.product.nutrient_levels.salt === 'high') {
    this.nutrientlevel = "high";
  }
}

loadProductsUnit(Id:number): void {
  this.productService.GetProductById(Id).subscribe(response => {
    this.product = response.product;
  });
}
returnAcceuil() {
  this.router.navigateByUrl(`/Product`);
}
}
