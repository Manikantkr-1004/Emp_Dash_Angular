import { Component } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent {

  highest: string = "The higest salary person is "

  data: Person[] = [
    {name: "John", salary: 3000, designation: "developer"},
    {name: "Emma", salary: 4000, designation: "manager"},
    {name: "Kelly", salary: 3500, designation: "tester"}
  ]

  handleAdd(name:string,salary:string,designation:string):void{
    this.data.push({name,salary: +salary,designation})
    console.log(this.data);
    
  }

  
  
}
