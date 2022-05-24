import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  products: Product[] = []
  product: Product | undefined 
  constructor( 
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getId()
  }
  getId():void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.productService.getProduct().subscribe(items => {
      this.products = items
      
    })
    this.product = this.products.find(item => item.id == id)
    console.log(this.product)
  }
}
