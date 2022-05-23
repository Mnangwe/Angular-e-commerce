import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getId()
  }
  getId():void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(id)
  }
}
