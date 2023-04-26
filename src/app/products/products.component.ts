import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent  {

  products = products;

  share() {
    window.alert('The product has been shared!');
  }

}

// export class ProductsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
