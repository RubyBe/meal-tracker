import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-add',
  outputs: ['onSubmitNewStrings'],
  template: `
    <h3>Add a New Meal</h3>
    <div class="meal-list-add-form">
      <input placeholder="Name" class="input-lg meal-list-add-form" #newName>
      <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
      <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
      <button (click)="addMeal(newName, newCalories, newDescription)">Add new meal</button>
    </div>
  `
})
export class MealAddComponent {
  public onSubmitNewStrings: EventEmitter<[Meal]>;
  constructor() {
    this.onSubmitNewStrings = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newCalories: HTMLInputElement, newDescription: HTMLInputElement, newGenre: HTMLInputElement) {
    // console.log(newCalories.value);
    // this.onSubmitNewStrings.emit([newName.value, newCalories.value, newDescription.value, newGenre.value]);
    // newName.value="";
    // newCalories.value="";
    // newDescription.value="";

    }
  }
