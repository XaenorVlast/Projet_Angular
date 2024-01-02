import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss'],
})
export class ProductDetailComponent implements OnInit {


  constructor(private productService: ProductService,
    private route: ActivatedRoute, private router : Router) {}
    @Input() product!: Product;
  nutriscore: any;
  ecoscore: any;


ngOnInit(){
  const Id = +this.route.snapshot.params['id'];
  this.loadProductsUnit(Id);
  this.choisirImageNutriScore();
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


loadProductsUnit(Id:number): void {
  this.productService.GetProductById(Id).subscribe(response => {
    this.product = response.product;
  });
}
returnAcceuil() {
  this.router.navigateByUrl(`/Product`);
}
}
