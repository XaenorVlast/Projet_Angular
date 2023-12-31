import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.models';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  nutriscore!: string;
  ecoscore!: string;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.choisirImageNutriScore();
    this.choisirImageEcoScore();
  }
  choisirProduit() {
    this.router.navigateByUrl(`Product/${this.product.id}`);
  }

  choisirImageNutriScore() {
    if (this.product.nutriscore_tags[0] === 'a') {
      this.nutriscore = 'https://static.openfoodfacts.org/images/attributes/dist/nutriscore-a.svg'
    }
    if (this.product.nutriscore_tags[0] === 'b') {
      this.nutriscore = 'https://static.openfoodfacts.org/images/attributes/dist/nutriscore-b.svg'
    }
    if (this.product.nutriscore_tags[0] === 'c') {
      this.nutriscore = 'https://static.openfoodfacts.org/images/attributes/dist/nutriscore-c.svg'
    }
    if (this.product.nutriscore_tags[0] === 'd') {
      this.nutriscore = 'https://static.openfoodfacts.org/images/attributes/dist/nutriscore-d.svg'
    }
    if (this.product.nutriscore_tags[0] === 'e') {
      this.nutriscore = 'https://static.openfoodfacts.org/images/attributes/dist/nutriscore-e.svg'
    }
  }
  choisirImageEcoScore() {
    if (this.product.ecoscore_tags[0] === "not-applicable") {
      this.ecoscore = 'https://static.openfoodfacts.org/images/attributes/dist/ecoscore-not-applicable.svg'
    }
    if (this.product.ecoscore_tags[0] === "a") {
      this.ecoscore = 'https://static.openfoodfacts.org/images/attributes/dist/ecoscore-a.svg'
    }
    if (this.product.ecoscore_tags[0] === "b") {
      this.ecoscore = 'https://static.openfoodfacts.org/images/attributes/dist/ecoscore-b.svg'
    }
    if(this.product.ecoscore_tags[0]==="c"){
      this.ecoscore='https://static.openfoodfacts.org/images/attributes/dist/ecoscore-c.svg'
    }
    if(this.product.ecoscore_tags[0]==="d"){
      this.ecoscore='https://static.openfoodfacts.org/images/attributes/dist/ecoscore-d.svg'
    }
    if(this.product.ecoscore_tags[0]==="e"){
      this.ecoscore='https://static.openfoodfacts.org/images/attributes/dist/ecoscore-e.svg'
    }
  }
}


