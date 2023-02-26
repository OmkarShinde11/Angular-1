import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  jokes:string='This is very funny'
  isClicked:boolean=false
 
  constructor() { }

  ngOnInit(): void {
  }
  seeJoke(data){
    debugger;
    console.log(data)
  }
}
