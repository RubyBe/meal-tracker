import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { MealAddComponent} from './meal-add.component';
import { MealEditComponent} from './meal-edit.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, MealAddComponent, MealEditComponent],
  template:`
    <h3>Click any meal to show or edit details:</h3>
      <div class = "container jumbotron" id="display">
        <meal-display *ngFor="#currentMeal of mealList"
          (click)="mealClicked(currentMeal)"
          [mealSelected]="currentMeal===selectedMeal"
          [meal]="currentMeal">
        </meal-display>
      </div>
   <h3>Edit Meal Details:</h3>
      <div class = "container jumbotron" id="edit">
        <meal-edit *ngIf="selectedMeal" [meal]="selectedMeal">
        </meal-edit>
      </div>
    <h3>Add a New Meal:</h3>
      <div class = "container jumbotron" id="add">
        <meal-add (onSubmitNewStrings)="createMeal($event)"></meal-add>
      </div>
  `

})
export class MealListComponent{
  // property to hold our input
  public mealList: Meal[];
  // property to hold our output
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal.calories);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(meal): void {
    this.mealList.push(
      new Meal(meal.name, meal.calories, meal.description)
    );
  }
}
