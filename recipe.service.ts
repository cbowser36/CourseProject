import { EventEmitter, Injectable } from '@angular/core';

import { Ingridient } from '../shared/ingridient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

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


      getRecipes(){
          return this.recipes.slice();
      }
      addIngridientsToShoppingList(ingridients: Ingridient[]){
        this.slService;
      }
}