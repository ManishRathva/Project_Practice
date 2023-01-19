import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent{
@Input() name:any;
@Input() list:any[]= [];
@Input() hero:any = {};
@Output() foodEvent:EventEmitter<string> = new EventEmitter<string>(); 
addToFood(value:any){
  this.foodEvent.emit(value);
}
}
