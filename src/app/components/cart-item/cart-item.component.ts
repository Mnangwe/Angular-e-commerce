import { Component, OnInit, Input} from '@angular/core';
import { Product } from 'src/app/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product?: Product
  @Input() i: any
  @Input() cart: any
  @Input() method!: (() => void) 
  // @Input() totalCost!: () => void
  value: number = 1
  constructor( private router: Router) { }

  ngOnInit(): void {
    console.log("Hello world")
  }

  editCart(index: number){
    let found = this.cart.find((elem: any) => elem.id == this.cart[index].id)
    if(found) found.quantity = this.value
    if(found.quantity == 0 ){
      this.cart.splice(index,1)
    }else if(found) this.cart.splice(index,1,found)
    localStorage.setItem('cart', JSON.stringify(this.cart))
    alert('You updated your price!')
    // this.getCart()
    this.method()
    // this.totalCost()
    this.reloadCurrentRoute()
  }

  deleteItem(index: number){
    let found = this.cart.find((elem: any) => elem.id == this.cart[index].id)
    if(found) this.cart.splice(index,1)
    localStorage.setItem('cart', JSON.stringify(this.cart))
    this.method()
    this.reloadCurrentRoute()
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}
}
