import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {
  @Input() product: IProduct = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    imageUrl: ''
  };
  @Input() type: string = '';
  @Input() category: string = '';
}
