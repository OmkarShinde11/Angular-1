import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBind]'
})
export class BindDirective {
  @HostBinding('style.backgroundColor')first:string;
  @HostListener('mouseover') change(){
   this.first='red'
  }
  @HostListener('mouseleave') change1(){
    this.first='yellow'
  }
  constructor() { }

}
