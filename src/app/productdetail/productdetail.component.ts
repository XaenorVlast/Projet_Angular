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
  novagroup: any;


ngOnInit() : void {
  const Id = +this.route.snapshot.params['id'];
  this.loadProductsUnit(Id);
  this.choisirImageNutriScore();
  this.choisirImageEcoScore();
  this.choisirImageNovaGroup();
}

choisirImageNovaGroup(){
  if(this.product.nova_group === 1){
    this.novagroup= 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/NOVA_group_1.svg/102px-NOVA_group_1.svg.png'
  }
  if(this.product.nova_group === 2){
    this.novagroup= 'https://static.openfoodfacts.org/images/attributes/dist/nova-group-2.svg'
  }
  if(this.product.nova_group=== 3){
    this.novagroup = "https://static.openfoodfacts.org/images/attributes/dist/nova-group-3.svg"
  }
  if(this.product.nova_group === 4){
    this.novagroup = "https://static.openfoodfacts.org/images/attributes/dist/nova-group-4.svg"
  }

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
