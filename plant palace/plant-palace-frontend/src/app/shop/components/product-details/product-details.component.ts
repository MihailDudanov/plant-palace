import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product: IProduct = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    imageUrl: ''
  };
  type: string = '';
  category: string = '';
  id: number = 0;

  selectedQuantity: number = 0;

  isProductAdded: boolean = false;

  constructor(private router: Router, private http: HttpClient) {
    router.events.subscribe((val) => {
      this.type = this.router.url.split('/').at(1) ?? '';
      this.category = this.router.url.split('/').at(2) ?? '';
      this.id = Number(this.router.url.split('/').at(3));
      this.fetchProductData();
    });
  }

  fetchProductData() {
    this.http.get(`./assets/products/${this.type}-${this.category}.json`).subscribe((result) => {
      let products = result as IProduct[];
      this.product = products.find(product => product.id == this.id) ?? {
        id: 0,
        name: '',
        description: '',
        price: 0,
        quantity: 0,
        imageUrl: ''
      };
    })
  }

  updateSelectedQuantity(value: number){
    this.selectedQuantity = this.selectedQuantity + value;
  }

  addToCart() {
    this.isProductAdded = true;
  }
}
