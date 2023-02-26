import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {
@HostListener('mouseenter')changes(){
   this.random.setStyle(this.ele.nativeElement,'backgroundColor','red')
}
@HostListener('mouseleave') change1(){
  this.random.setStyle(this.ele.nativeElement,'color','yellow')
}
  constructor(private ele:ElementRef,private random:Renderer2) { }

}
