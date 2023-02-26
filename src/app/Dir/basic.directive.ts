import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasic]'
})
export class BasicDirective implements OnInit{

  constructor(private element:ElementRef) { }
  ngOnInit(){
    this.element.nativeElement.style.backgroundColor='red'
  }
}
