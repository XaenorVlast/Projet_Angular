import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() product: any;
  @Output() eventOut = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.eventOut.emit(this.product.name);
  }

  onClickDetail() {
    this.router.navigate(['/products', this.product.id, 'detail']);
  }

  ngOnDestroy(): void {}
}


