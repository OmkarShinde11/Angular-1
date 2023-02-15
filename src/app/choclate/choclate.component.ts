import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-choclate',
  templateUrl: './choclate.component.html',
  styleUrls: ['./choclate.component.css']
})
export class ChoclateComponent implements OnInit {
  //  choclate:number=0;
   message:string;
   @Input()choclate:number;
   @Output() sendgift=new EventEmitter();
   list=['omkar','sid'];
  constructor() { }

  ngOnInit(): void {
    console.log("The List is"+this.list.splice(0,1));
    
  }
  sendChoclate(){
    this.choclate++;
  }
  sendReward(){
    this.message='Thank you recived from child for '+this.choclate+' choclate';
    this.sendgift.emit(this.message)
  }

}
