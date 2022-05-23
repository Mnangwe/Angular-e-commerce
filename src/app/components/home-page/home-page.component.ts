import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { PRODUCTS } from 'src/app/mock-products';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  products: Product[] =  []

  constructor() { }
  
  ngOnInit(): void {
    this.registerProduct()
    this.getProducts()
    
  }
  registerProduct() {
    localStorage.setItem('products', JSON.stringify(PRODUCTS))
  }
  getProducts() {
   this.products = JSON.parse(`${localStorage.getItem('products')}`)
      
  }
}
