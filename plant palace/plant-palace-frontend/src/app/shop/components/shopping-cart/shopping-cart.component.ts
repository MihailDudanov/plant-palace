import { Component } from '@angular/core';
import { ICartProduct } from '../../models/cart-product';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  title: string = 'Your Shopping Cart';
  empptyShoppingCartMessage: string = 'Your shopping cart is empty. Browse products and add them to your cart.';
  orderPlaced: boolean = false;

  products: ICartProduct[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getCartProducts().subscribe((data: ICartProduct[]) => {
      this.products = data;
    });
  }

  updateSelectedQuantity(value: number, id: number) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products[index].selectedQuantity += value;
    }
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  calculateTotalPrice() : number{
    let sum = 0;
    this.products.forEach(product => {
      sum += product.itemPrice * product.selectedQuantity
    })
    return sum;
  }

  orderNow(): void { 
    this.products = []
    this.orderPlaced = true;
  }

}

