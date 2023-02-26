import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFadeinFadeout]'
})
export class FadeinFadeoutDirective {
  @Input() content:string;
  @HostListener('mouseover') change(){
    var a=this.ele.nativeElement.querySelector('.joke');
    this.rendere.setStyle(this.ele.nativeElement,'display','none');
  }
  @HostListener('mouseleave')change1(){
    this.rendere.setStyle(this.ele.nativeElement,'display','block')
  }
  constructor(private ele:ElementRef,private rendere:Renderer2) { }

}
