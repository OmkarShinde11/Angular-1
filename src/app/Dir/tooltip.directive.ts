import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})

export class TooltipDirective {
   elTooltip=this.rendere.createElement('span');
   text=this.rendere.createText('This is Tooltip');
   a=this.rendere.appendChild(this.elTooltip,this.text);
   b=this.rendere.appendChild(this.ele.nativeElement.parentNode,this.elTooltip);
  @HostListener('mouseover') change(){
    // this.rendere.appendChild(this.elTooltip,this.text);
    // this.rendere.appendChild(this.ele.nativeElement.parentNode,this.elTooltip);
    this.rendere.setStyle(this.elTooltip,'display','block')
  }
  @HostListener('mouseleave') change1(){
    this.rendere.setStyle(this.elTooltip,'display','none')
  }
  constructor(private ele:ElementRef,private rendere:Renderer2) { }

}
