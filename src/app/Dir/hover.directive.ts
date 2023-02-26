import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @HostListener('mouseover') change(){
    var a=this.ele.nativeElement.querySelector('.content');
    var b=this.rendere.createElement('p');
    var c=this.rendere.createText('This is very funny joke');
    this.rendere.appendChild(b,c);
    this.rendere.appendChild(this.ele.nativeElement.parentNode,b)
    this.rendere.setStyle(this.ele.nativeElement,'display','none');
  }
 
 
  constructor(private ele:ElementRef,private rendere:Renderer2) { }

}
