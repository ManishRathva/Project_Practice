import { Component } from '@angular/core';

@Component({
  selector: 'app-strctrl-directive',
  templateUrl: './strctrl-directive.component.html',
  styleUrls: ['./strctrl-directive.component.css']
})
export class StrctrlDirectiveComponent {
names:string[]=['manish','pramod','vishal','dhruv'];
selectedSkills ='';
selectedCourse = '';
handleEvent(event:any){
  const value:any = event.target.value;
  this.selectedSkills = value;
}
Event(event:any){
  const val = event.target.value;
  document.write(val);
}
user:any =[
  {
    name:'manish',
    skill:'angular',
    gender:'male'
  },
  {
    name:'pramod',
    skill:'angular',
    gender:'female'
  },
  {
    name:'vishal',
    skill:'SEO',
    gender:'male'
  },
  {
    name:'dhruv',
    skill:'react',
    gender:'male',
  }
];
 currentUser:any = {
  name:'',
  skill:'',
  gender:'',
 };
 isDisabled = true;

showData(indexNum:any){
  this.isDisabled = true;
  this.currentUser = this.user[indexNum];
}
setValue(event:any){
let value = event.target.value;
const keyName = event.target.name;
this.currentUser[keyName] = value;
}
dataEdit(){
  this.isDisabled = false;
}
}
