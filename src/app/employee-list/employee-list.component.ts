import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { employee } from 'src/assets/employee';
import { EmployeeService } from '../Service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  list:{id:number,name:string,price:number}[]=[];
  employeeList:employee[];
  constructor(private employeeservice:EmployeeService) { }
  @ViewChild('id')id:ElementRef;
  @ViewChild('name')name:ElementRef;
  @ViewChild('designation')designation:ElementRef;
  todayDate;
  todayTime;
  ngOnInit(): void {
    // this.list=this.employeeservice.employeeList
    this.todayDate=this.employeeservice.date;
    this.todayTime=this.employeeservice.date.toLocaleTimeString()
  }

  addProduct(id:number,name:string,price:number){
    this.list=this.employeeservice.employeeList;
    this.employeeservice.getProducts(id,name,price)
  }

  addEmployee(){
    this.employeeList=this.employeeservice.list;
    this.employeeservice.getEmployee(this.id.nativeElement.value,this.name.nativeElement.value,this.designation.nativeElement.value)
  }
  
}
