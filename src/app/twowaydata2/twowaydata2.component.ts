import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-twowaydata2',
  templateUrl: './twowaydata2.component.html',
  styleUrls: ['./twowaydata2.component.css']
})
export class Twowaydata2Component {
@Input() item:any; 
itemPrice:number =15;
incQty(){
this.item +=1;
}
decQty(){
this.item -=1;
}
}
