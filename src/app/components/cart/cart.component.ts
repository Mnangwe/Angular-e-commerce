import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { Location } from '@angular/common';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Product[] = JSON.parse(`${localStorage.getItem('cart')}`) ?
  JSON.parse(`${localStorage.getItem('cart')}`) : []

  total: number = 0

  constructor( private location: Location) { }

  ngOnInit(): void {
    this.totalCost()
  }

  totalCost(){
    this.cart.map( elem => {
      if(elem.quantity) this.total += elem.price*elem.quantity
    })
  }

  checkout(){
    this.location.back()
    alert(`Thank you for visiting us, your total price it: R ${this.total}`)
    localStorage.removeItem('cart')
    
  }

}
