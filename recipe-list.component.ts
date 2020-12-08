import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output()   recipeWasSelected =new EventEmitter<Recipe>();
     
    recipes: Recipe[] = [
      new Recipe('Spaghetti and Meatballs','Spaghetti Noodles with Marinara Sauce','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg'),
      new Recipe('Spaghetti','Spaghetti Noodles with Marinara Sauce','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg'),
      new Recipe('Spaghetti','Spaghetti Noodles with Marinara Sauce','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg')
    ]

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
 }

}
