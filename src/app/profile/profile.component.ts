import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
detail:any = [ 
{
  name :'Manish Rathva',
  age :21,
  details:'I am Angular Devloper',
  Salary:10000,
},
{
  name :'Pramod dodiya',
  age :21,
  details:'I am Angular Devloper',
  Salary:10000,
},
{
  name :'Vishal Rathva',
  age :21,
  details:'I am Angular Devloper',
  Salary:10000,
}];
}
