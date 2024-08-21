import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

interface Products{

  sno:string;
  Image:string;
  Name:string;
  Price:number;
  Qty:number;
  Total:number;

}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
   
  public product:Products[]=[
    {

      sno:'111A',
      Image:'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
      Name:'North indian',
      Price:110,
      Qty:1,
      Total:110
    },
    {

      sno:'111B',
      Image:'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600',
      Name:'East indian',
      Price:80,
      Qty:1,
      Total:80
    },
    {

      sno:'111C',
      Image:'https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=600',
      Name:'South indian',
      Price:80,
      Qty:1,
      Total:80
    }
    

  ]

  constructor() { }

  ngOnInit(): void {
  }

  public plus(productId:string):void{
    this.product=this.product.map((product:Products)=>{
          
      if(product.sno===productId){
        return{
          ...product,
          Qty : product.Qty+1
        }
        
      }
      return product;
    })

  }

  public minus(productId:string):void{
    this.product=this.product.map((product:Products)=>{
      
      if(product.sno===productId){

        return{
          ...product,
          Qty : product.Qty-1>0 ? product.Qty-1:1
        }
      }
      return product;
    })
  }

  public totalprice():number{
    let total:number=0;
    for(let product of this.product){
       total += (product.Qty * product.Price);
    }
    return total;
  }
}

