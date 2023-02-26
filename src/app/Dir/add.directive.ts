import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAdd]'
})
export class AddDirective implements OnInit {
  
  @HostListener('click') change(){
    var a=this.rendere.createElement('p');
    var b=this.rendere.createText('This is very funnt joke');
    this.rendere.appendChild(a,b);
    this.rendere.appendChild(this.ele.nativeElement.parentNode,a);
    this.rendere.setStyle(this.ele.nativeElement.parentNode,'backgroundColor','#999')
  }
  
  constructor(private ele:ElementRef,private rendere:Renderer2) { }
  ngOnInit(){
    
  }

}
