import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { PRODUCTS } from './mock-products';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    return products;
  } 
  postProduct(product: Product) {
    PRODUCTS.push(product);
  }
}
