import { Component, OnInit } from '@angular/core';

interface Product{
    
  sno:string;
  Image:string;
  Name:string;
  Price:number;
  Qty:number;
  Total:number;
                   
}
@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {

  public product:Product={
     sno:'111A',
     Image :'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     Name:'south indian',
     Price:120,
     Qty:1,
     Total:120,


  }
  constructor() { }

  ngOnInit(): void {
  }

  public plus():void{
   this.product={
    ...this.product,
    Qty:this.product.Qty+1
   }
  }

  public minus():void{
   this.product={
    ...this.product,
    Qty:this.product.Qty-1>0 ? this.product.Qty-1:1
   }
  }
}
