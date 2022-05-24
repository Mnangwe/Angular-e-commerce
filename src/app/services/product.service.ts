import { Injectable } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  quantity: number | undefined
  
  products: Product[] =[]
  constructor( ) { }

  getProduct(): Observable<Product[]> {
    const products = of(PRODUCTS);
    return products;
  }
 
  
  // addProduct()

}
