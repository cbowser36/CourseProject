import {  Injectable } from '@angular/core';

import { Ingridient } from '../shared/ingridient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  

  private  recipes: Recipe[] = [
        new Recipe('Spaghetti and Meatballs',
        'Spaghetti Noodles with Marinara Sauce',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg',
        [
          new Ingridient('Meatballs', 10),
          new Ingridient('Marinara', 1),
          new Ingridient('Noodles', 12)
        ]),
        new Recipe('Spaghetti',
        'Spaghetti Noodles with Marinara Sauce',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg',
        [
          new Ingridient('Meatballs', 10),
          new Ingridient('Marinara', 1),
          new Ingridient('Noodles', 12)
        ]),
      ]
constructor(private slService: ShoppingListService){

}
      setRecipes(recipes:Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index:number){
        return this.recipes[index];
      }

      addIngridientsToShoppingList(ingridients: Ingridient[]){
        this.slService;
      }
      
      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
 
      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deletedRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }



}