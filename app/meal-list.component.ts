import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  template:`
    <h4 *ngFor="#currentMeal of mealList"
      (click)="mealWasSelected(currentMeal)">{{currentMeal.name}}
    </h4>
  `

})
export class MealListComponent{
  public mealList: Meal[];
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}
