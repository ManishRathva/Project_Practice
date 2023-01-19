import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-directive',
  templateUrl: './attr-directive.component.html',
  styleUrls: ['./attr-directive.component.css']
})
export class AttrDirectiveComponent {
myCls = {
  box:true,
  border:false,
  circle:false,
}

addStyle(){
this.myCls.border = !this.myCls.border;
this.myCls.circle = !this.myCls.border;
}
}
