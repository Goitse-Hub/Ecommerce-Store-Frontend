import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
// export class CartComponent implements OnInit {
// [x: string]: any;

//   constructor() { }

//   ngOnInit(): void {
//   }

// }



export class CartComponent{

    headers = ["Product", "Price", "Quantity", "Subtotal"];
  
    rows =[
      {
        Product : "Nike",
        Price : "200",
        Quantity : "1",
        Subtotal: "200"
      },
      // {
      //   "Product" : "Nike",
      //   "Price" : "200",
      //   "Quantity" : "1",
      //   "Subtotal": "200"
      // },
      // {
      //   "Product" : "Nike",
      //   "Price" : "200",
      //   "Quantity" : "1",
      //   "Subtotal": "200"
      // },
      // {
      //   "Product" : "Nike",
      //   "Price" : "200",
      //   "Quantity" : "1",
      //   "Subtotal": "200"
      // },
    ]
  }
