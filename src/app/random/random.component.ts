import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
 @Output() element=new EventEmitter<string>();
 outputMsg='this is child component';
 
  constructor() { }

  ngOnInit(): void {
  }
  sendvalues(){ 
   this.element.emit(this.outputMsg);
  }
  

}
