import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  @HostListener('mouseover') change(){
    this.ele.nativeElement.classList.add('toggle')
  }
  @HostListener('mouseleave') change1(){
    this.ele.nativeElement.classList.remove('toggle')
  }
  constructor(private ele:ElementRef,private rendere:Renderer2) { }

}
