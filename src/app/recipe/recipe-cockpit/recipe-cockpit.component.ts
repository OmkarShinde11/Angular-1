import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recipe-cockpit',
  templateUrl: './recipe-cockpit.component.html',
  styleUrls: ['./recipe-cockpit.component.css']
})
export class RecipeCockpitComponent implements OnInit {
  // recipeName:string;
  // recipeIngredients:string;
  @Output() VegRecipe=new EventEmitter<{type:string,name:string,ingredients:string}>();
  @Output() NonVegRecipe=new EventEmitter<{type:string,name:string,ingredients:string}>();
  @ViewChild('recipeName') recipeName:ElementRef;
  @ViewChild('recipeIngredients') recipeIngredients:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  addVegRecipe(){
    // this.recipes.push({
    //   type:'veg',
    //   name:this.recipeName,
    //   ingredients:this.recipeIngredients
    // })
    this.VegRecipe.emit({
      type:'veg',
      name:this.recipeName.nativeElement.value,
      ingredients:this.recipeIngredients.nativeElement.value,
    })
  }
  addNonVegRecipe(){
    // this.recipes.push({
    //   type:'nonVeg',
    //   name:this.recipeName,
    //   ingredients:this.recipeIngredients
    // })
    this.NonVegRecipe.emit({
      type:'nonVeg',
      name:this.recipeName.nativeElement.value,
      ingredients:this.recipeIngredients.nativeElement.value,
    })
  }
}
