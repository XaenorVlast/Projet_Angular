import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Product } from '../models/product.models';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productletter',
  templateUrl: './productletter.component.html',
  styleUrls: ['./productletter.component.scss'],
})
export class ProductLetterComponent implements OnInit {

  ngOnInit(): void {

  }
}

