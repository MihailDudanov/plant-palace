import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, switchMap, throwError } from 'rxjs';
import { IProduct } from '../models/product';
import { ICartProduct } from '../models/cart-product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private jsonUrl = 'assets/products/plants-flowers.json';
  private cartJsonUrl = 'assets/products/cart-products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.jsonUrl);
  }

  getCartProducts(): Observable<ICartProduct[]> {
    return this.http.get<ICartProduct[]>(this.cartJsonUrl);
  }

  getCartProduct(id: number): Observable<ICartProduct> {
    return this.http.get<ICartProduct[]>(this.cartJsonUrl).pipe(
      map(products => products.find(p => p.id === id)),
      switchMap(product => {
        if (product) {
          return of(product); // Return the product if found
        } else {
          return throwError(new Error(`Product with ID ${id} not found`)); // Throw error if not found
        }
      })
    );
  }

}
