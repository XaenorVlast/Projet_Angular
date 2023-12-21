import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() eventOut: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onEvent = (event: any) => {
    this.eventOut.emit(event);
  };
}
