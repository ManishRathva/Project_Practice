import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges{
@Input() userId?:number;
ngOnChanges(changes: SimpleChanges):void{
for (const propName in changes){
  const prop = changes[propName]; 

  const { previousValue ,currentValue ,firstChange } = prop;
  console.log(`Prop Name ${propName}`);
  console.log(`Prev Value ${previousValue}`);
  console.log(`Current Value ${currentValue}`);
  console.log(`Isfirst change ${firstChange}`);
  console.log(`------------------------------`);
   }
  }
}
