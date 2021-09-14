
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    { id: 1, productId: 1, productName: 'test1', qty: 4, price: 20},
    //{ id: 2, productId: 3, productName: 'test3', qty: 5, price: 25},
    //{ id: 3, productId: 2, productName: 'test2', qty: 3, price: 20},
    //{ id: 4, productId: 4, productName: 'test4', qty: 2, price: 35}
  ];

  cartTotal = 0
  constructor(private  msg:  MessengerService) { }

  ngOnInit() {

    this.msg.getMsg().subscribe(product: Product) => {

      this.cartItems.push({
        productName: product.productName, 
        qty: 1,

    })

      
  
      this.cartItems.forEach(item =>  {
        this.cartTotal += (item.qty * item.price)
      })
    })
    

   
  }

}
