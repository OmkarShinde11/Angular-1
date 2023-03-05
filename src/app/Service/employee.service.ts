import { getLocaleTimeFormat } from '@angular/common';
import { Injectable } from '@angular/core';
import { employee } from 'src/assets/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList=[
    {
      id:1,
      name:'Realme',
      price:2000
    },
    {
      id:2,
      name:'iphone',
      price:80000
    },
    {
      id:3,
      name:'onePlusNord2T5G',
      price:36000
    }
  ];
  list:employee[]=[];
  date=new Date();
  
  constructor() { }

  getProducts(id:number,productNumber:string,productPrice:number){
    this.employeeList.push({
      id:id,
      name:productNumber,
      price:productPrice,
    })
  }

  getEmployee(empid:number,empName:string,empDesignation:string){
   this.list.push({
    id:empid,
    name:empName,
    designation:empDesignation
   })
  }

  
 
}
