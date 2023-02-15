import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  // recipeName:string;
  // recipeIngredients:string;
  recipes=[{
    type:'veg',
    name:'DalRice',
    ingredients:'Dal'
  }];
  constructor() { }

  ngOnInit(): void {
  }
  
  // addVegRecipe(){
  //   this.recipes.push({
  //     type:'veg',
  //     name:this.recipeName,
  //     ingredients:this.recipeIngredients
  //   })
  // }
  // addNonVegRecipe(){
  //   this.recipes.push({
  //     type:'nonVeg',
  //     name:this.recipeName,
  //     ingredients:this.recipeIngredients
  //   })
  // }
  addVeg(data:{name:string,ingredients:string}){
    this.recipes.push({
      type:'veg',
      ingredients:data.ingredients,
      name:data.name
    })
  }
  addNonVeg(data:{name:string,ingredients:string}){
    this.recipes.push({
      type:'nonVeg',
      ingredients:data.ingredients,
      name:data.name
    })
  }
  destroy(){
    this.recipes.splice(0,1)
  }
}
