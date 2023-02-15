import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // servername:string;
  // serverContent:string;
  // Serverlist=[];
  
   @Output() serverCreation=new EventEmitter<{type:string,name:string,content:string}>();
   @Output() serverBlueprint=new EventEmitter<{type:string,name:string,content:string}>();
   @ViewChild('servername') servername:ElementRef;
   @ViewChild('serverContent') serverContent:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  
  addServer(){
    // console.log(this.Serverlist)
    // this.Serverlist.push({
    //   type:'server',
    //   name:this.servername,
    //   content:this.serverContent
    // },)
    this.serverCreation.emit({
      type:'server',
      name:this.servername.nativeElement.value,
      content:this.serverContent.nativeElement.value,
    })
   }
   addBlueprint(){
  //   this.Serverlist.push({
  //     type:'blueprint',
  //     name:this.servername,
  //     content:this.serverContent
  //   })
  this.serverBlueprint.emit({
    type:'blueprint',
    name:this.servername.nativeElement.value,
    content:this.serverContent.nativeElement.value,
  })
  }
}
