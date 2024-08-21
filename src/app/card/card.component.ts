import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public title:string='south India';
  public subtitle:string='These are Kinds of food of foods available in south indian places';
  
  public foodimg:string='https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  
  public title1:string='North India';
  public subtitle1:string='These are Kinds of food of foods available in North indian places';
  
  public foodimg1:string='https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  constructor() { }

//count increment method

  public count:number=0;
  public count1:number=0;
 


  ngOnInit(): void {
  }

  public increcount():void{
    this.count=this.count+1;
  }
  public deccount():void{
    this.count=this.count-1>0 ? this.count-1:0;
  }

  public increcount1():void{
    this.count1=this.count1 +1;
  }
  public deccount1():void{
    this.count1=this.count1 -1 > 0 ? this.count1 -1 : 0;
  }

}
