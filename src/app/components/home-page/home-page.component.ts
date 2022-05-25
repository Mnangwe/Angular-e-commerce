import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { PRODUCTS } from 'src/app/mock-products';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  products: Product[] =  JSON.parse(`${localStorage.getItem('products')}`) ?
  JSON.parse(`${localStorage.getItem('products')}`) : []
  value: number = 1
  cart: Product[] = []
  cartLength: any
  constructor(private productService: ProductService, private router: Router) { }
  
  ngOnInit(): void {
    this.getProducts()
    
  }
  getProducts(): void{
    if(!localStorage.getItem('token')) {
      this.router.navigate(['login'])
      return alert('Please ensure you log in!')
    }else{
      this.productService.getProduct().subscribe(items => this.products = items)
    }
   
      
  }
  addToCart(index: number){
    let product = {
      quantity: this.value,
      ...this.products[index]
    }
    this.cart.push(product)
    console.log(this.cart)
    localStorage.setItem('cart', JSON.stringify(this.cart))
    if(localStorage.getItem('cart')){

      this.cartLength = JSON.parse(`${localStorage.getItem('cart')}`).length
      console.log(this.cartLength)
    }
  }
}
