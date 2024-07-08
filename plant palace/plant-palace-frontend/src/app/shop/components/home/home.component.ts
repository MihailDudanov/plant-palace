import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products = [
    { name: 'Product 1', imageUrl: '../../../../assets/images/plant-product.png' },
    { name: 'Product 2', imageUrl: '../../../../assets/images/plant-product.png' },
    { name: 'Product 3', imageUrl: '../../../../assets/images/plant-product.png' },
    { name: 'Product 4', imageUrl: '../../../../assets/images/plant-product.png' },
    { name: 'Product 5', imageUrl: '../../../../assets/images/plant-product.png' },
    { name: 'Product 6', imageUrl: '../../../../assets/images/plant-product.png' },
  ];

  groupedProducts: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.groupProducts();
  }

  groupProducts(): void {
    const chunkSize = 3;
    for (let i = 0; i < this.products.length; i += chunkSize) {
      this.groupedProducts.push(this.products.slice(i, i + chunkSize));
    }
  }
}
