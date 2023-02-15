import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  numberEvent;
  @Output()intervalfired=new EventEmitter<number>()
  @Input()intervals:number;
  constructor() { } 

  ngOnInit(): void {
  }

  
  start(){
    this.numberEvent=setInterval(()=>{
      this.intervalfired.emit(this.intervals + 1);
      this.intervals++
      
    },1000)
  }
  stop(){
     clearInterval(this.numberEvent)
  }
  reset(){
    this.intervals=0;
  }

}
