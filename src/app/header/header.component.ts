import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
  
]
})
export class HeaderComponent {
  textCls = '';
text = '';
fontSize = 10;
setText(event:any){
  let val = event.target.value;
}
textSize(event:any){
 let val = event.target.value;
 this.fontSize = val;
  }
  
  typeText(event:any){
    let val = event.target.value;
    this.text = val;
  }
  textCls1 ='';
  setColor(event:any){
  const val = event.target.value;
  this.textCls1 = val;
}
person:any = {
  name: '',
  email:'',
  cmp:'',
  salary:'',
};
setValue(event:any){
  let keyName = event.target.name;
  console.log(keyName);
  const value = event.target.value;
  this.person[keyName] = value;
}
submitData(){
  for(const key in this.person){
    const val = this.person[key];

    if(val.trim().length === 0){
      alert("field must be not");
      return;
    }
  }
this.isDataSubmitted = true;
  console.log(this.person);
}
isDataSubmitted = false;
 
resetForm(){
  this.person = {
    name: '',
    email:'',
    cmp:'',
    salary:'',
  }
  this.isDataSubmitted = false;
}
}
