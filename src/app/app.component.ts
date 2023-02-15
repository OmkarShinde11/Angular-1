import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  servername:string;
//  serverContent:string;
//  Serverlist=[];
name:string;
candies:number=5;
msg=''
server=[{
  type:'server',
  name:'Test',
  content:'Test Server'
}];
oddnumber:number[]=[]
evennumber:number[]=[]
list=[];
timer:number=0;

createServer(data:{name:string,content:string}){
  this.server.push({
    type:'server',
    name:data.name,
    content:data.content
  })
}
createBlueprint(data:{name:string,content:string}){
   this.server.push({
    type:'blueprint',
    name:data.name,
    content:data.content
   })
}
addMusic(newMusician:any){
  this.name=newMusician
   this.list.push(newMusician);
}

receive(event){
  this.msg=event;
  console.log(this.msg)
}

//  addServer(){
//   console.log(this.Serverlist)
//   this.Serverlist.push({
//     type:'server',
//     name:this.servername,
//     content:this.serverContent
//   },)
 
//  }
//  addBlueprint(){
//   this.Serverlist.push({
//     type:'blueprint',
//     name:this.servername,
//     content:this.serverContent
//   })
//  }
getMsg(data){
  console.log(data)
}

change(){
  this.server[0].name='Omkar'
}
destroy(){
  this.server.splice(0,1)
}

updateNumber(data){
  if(data%2==0){
    this.oddnumber.push(data)
  }
  else{
    this.evennumber.push(data)
  }
}
}

