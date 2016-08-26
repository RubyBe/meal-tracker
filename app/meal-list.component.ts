import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { MealAddComponent} from './meal-add.component';
import { MealEditComponent} from './meal-edit.component';
import { CalorieFilterPipe } from './calorie-filter.pipe';

// a class which manages the list of meal objects and provides view anchors to view, edit, and add new meal objects
@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, MealAddComponent, MealEditComponent],
  pipes: [CalorieFilterPipe],
  template:`
    <h3>Click any meal to show or edit details:</h3>
      <div class = "container jumbotron" id="display">
        <select (change)="onChange($event.target.value)">
          <option value="fewer">Show meals < 500 calories</option>
          <option value="greater">Show meals > 499 calories</option>
          <option value="all">Show all meals</option>
        </select>
        <hr />
        <meal-display *ngFor="#currentMeal of mealList | calorieFilter:calorieFiltered"
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
  // property to hold filter selection
  public calorieFiltered: string="all";
  // property to hold our output
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  // a method which captures and passes a meal object in the meal list when it is clicked
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal.calories);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  // a method to add a new meal object to the list of meal objects
  createMeal(meal): void {
    this.mealList.push(
      new Meal(meal.name, meal.calories, meal.description)
    );
  }
  // a method which captures and passes any change from the calorie filter drop-down select
  onChange(optionFromMenu) {
    this.calorieFiltered = optionFromMenu;
  }
}
