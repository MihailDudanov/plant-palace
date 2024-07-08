import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../models/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  type: string = '';
  category: string = '';

  products: IProduct[] = [];

  constructor(private router: Router, private http: HttpClient) {
    router.events.subscribe((val) => {
      this.type = this.router.url.split('/').at(1) ?? '';
      this.category = this.router.url.split('/').at(2) ?? '';
      this.fetchProducts();
    });
  }

  fetchProducts() {
    this.http.get(`./assets/products/${this.type}-${this.category}.json`).subscribe((result) => {
      this.products = result as IProduct[];
    })
  }
}
