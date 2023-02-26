import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective {
  @Input() set appStructural(condition:boolean){
   if(!condition){
    this.view.createEmbeddedView(this.template)
   }
   else{
    this.view.clear()
   }
  }
  constructor(private view:ViewContainerRef,private template:TemplateRef<any>) { }

}
