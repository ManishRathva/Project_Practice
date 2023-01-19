import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
names:string = 'i am a manish rathva i have good knowledge for angular devloper';
today = new Date();
Num:number = 8000;

detail:any = {
  name:'Manish Rathva',
  age:22,
  Salary:8000,
}

person:any ={
  name: 'pramod dodiya',
  age:15,
  salary:'kurbani',
  village:'sarkhej',
}
persons ={
    name:'Manish Rathva',
    age:21,
    salary:7000,
  }
name =['Manish','Pramod','Preet','Vishal','Dhruv'];
pname:any = {
  name:'Pramod Kurbani apnar',
  Salary:'unExpected',
  age:'18+',
}
name1:string ='';
show(data:any){
   this.name1 = data;
}
}
