import { Component, OnInit } from '@angular/core';
import { GenderPipe } from '../gender.pipe';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  employees: any[] = [  
    {  
        code: 'emp101', name: 'karthik', gender: 'Male',  
        annualSalary: 5500, dateOfBirth: '6/26/1988'  
    },  
    {  
        code: 'emp102', name: 'sachin', gender: 'Male',  
        annualSalary: 5700.95, dateOfBirth: '9/6/1982'  
    },  
    {  
        code: 'emp103', name: 'rahul', gender: 'Male',  
        annualSalary: 5900, dateOfBirth: '12/8/1979'  
    },  
    {  
        code: 'emp104', name: 'mary', gender: 'Female',  
        annualSalary: 6500.826, dateOfBirth: '10/10/1980'  
    },  
];  

  constructor() { }

  ngOnInit(): void {
  }

}
