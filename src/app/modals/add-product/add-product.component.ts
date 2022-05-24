import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @Input() product?: Product
  constructor() { }

  ngOnInit(): void {
  }

}
