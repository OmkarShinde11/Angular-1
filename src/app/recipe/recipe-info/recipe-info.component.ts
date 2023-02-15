import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit ,AfterContentInit,OnDestroy{
  @Input()recipe:{type:string,name:string,ingredients:string};
  @ContentChild('itemName')itemName:ElementRef;
  constructor() { }
  

  ngOnInit(): void {
  } 
  ngAfterContentInit(): void {
    console.log("the content is called",this.itemName.nativeElement.textContent )
  }
  ngOnDestroy(){
    console.log('The destroy called')
  }

}
