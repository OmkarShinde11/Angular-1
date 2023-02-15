import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit,OnChanges,AfterContentInit,AfterViewInit {
   @Input()element:{type:string,name:string,content:string};
   @Input()heading:string;
   @ContentChild('content')content:ElementRef;
   @ViewChild('heading2')heading2:ElementRef
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.heading +"The Heading Is")
  }
   ngOnInit(): void {
    console.log(this.heading +"This Heading Is")
  }
  ngAfterContentInit(){
    console.log("The Content is"+this.content.nativeElement.textContent);
  }
  ngAfterViewInit(){
    console.log("the view is "+this.heading2.nativeElement.textContent)
  }
  ngOnDestroy(){
    console.log("Destroy called")
  }

}
