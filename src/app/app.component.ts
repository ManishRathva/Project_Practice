import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() foodDelete = new EventEmitter<number>();
  title = 'Project_Practice';
  heroList:string [] = [] ; 
//simple string value
  data:string = '';
  passValue(event:any){
  this.data = event.target.value;
  }
//parent to chid data get in array
addHero(event:any){
 let val = event.target.value;
 this.heroList.push(val);
}
//parent to child data get using object
hero:any = {
  name:'',
  id:'',
};
addValue(event:any){
     let vaal = event.target.value;
     this.hero = {
      name: vaal,
      id : Math.random(),
     };
    }
//using input/output decorator data get
    foods:string[] = [];
    afterFoodAdd(event:any){
    let f1 = event;
    this.foods.push(f1);
    }
    deleteItem(index:number){
    this.foodDelete.emit(index) 
    }
    inputdata:number = 1;

    addQty(val:any){
     this.inputdata = val ;
    }

    info : Product [] = [
    {name:'pen',qty:1,price: 10 },
    {name:'laptop',qty:1,price: 45000 },
    {name:'vivo mobile',qty:1,price: 5000 },
    {name:'Mi-fone',qty:1,price:50000}
    ];
    cartBucket : Product [] = [];
    update(payload:any){
     if(payload.addTocart){
       this.cartBucket.push(payload.product)
     }else{
      this.cartBucket = this.cartBucket.filter(v => v !== payload.product)
     }
  }
  calcPrice(){
    let total = 0;
    this.cartBucket.forEach(item => {
      total = total + item.qty * item.price;
    });
    return total;
  }
client = [ 
{name:'Manish',salary:10000,Age:21},
{name:'Pramod',salary:15000,Age:20},
{name:'preet' ,salary:11000,Age:22},
];

history = [{}];
update1 = {}; 
updateRepo(dir:any, msg:any){
  this.history.push({
    name : dir,
    isFile : dir.includes('.'),
    time : new Date()
});
this.update1 = {
  name:dir ,
  msg,
  history:this.history
};
}
public userIds = [1,2,3,4];
public selectedId : any;

public onIdselection(newId:number):void{
  this.selectedId = newId;
}
public uid:any;
}
