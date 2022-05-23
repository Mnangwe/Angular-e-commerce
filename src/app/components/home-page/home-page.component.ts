import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { PRODUCTS } from 'src/app/mock-products';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  products = PRODUCTS
  constructor() { }

  ngOnInit(): void {
    this.registerProduct()
  }
  registerProduct() {
    localStorage.setItem('products', JSON.stringify(PRODUCTS))
  }
  // getProducts(): Product[] {
  //   JSON.parse(localStorage.getItem('products')) 
                
  // }
}
