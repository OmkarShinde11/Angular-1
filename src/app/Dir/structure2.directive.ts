import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructure2]'
})
export class Structure2Directive {
  @Input() set appStructure2(condition){
    if(condition){
       this.view.createEmbeddedView(this.template)
    }
    else{
      this.view.clear()
    }
  }
  constructor(private view:ViewContainerRef,private template:TemplateRef<any>) { }
}
