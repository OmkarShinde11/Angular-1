import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAdvance]'
})
export class AdvanceDirective implements OnInit {

  constructor(private random:Renderer2, private ele:ElementRef) { }

  ngOnInit(){
     this.random.setStyle(this.ele.nativeElement,'color','yellow')
  }
}
