import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

// a class which passes a new meal object to its parent class for adding to the list of meal objects; a form which provides ability to enter details for the new meal object
@Component({
  selector: 'meal-add',
  outputs: ['onSubmitNewStrings'],
  template: `
    <div class="meal-list-add-form form group">
      <label for="name">Name</label>
      <input class="form-control meal-list-add-form" #newName>
      <label for="calories">Calories</label>
      <input class="form-control" #newCalories>
      <label for="description">Description</label>
      <input class="form-control" #newDescription>
      <hr />
      <button class="btn-lg btn-default" (click)="addMeal(newName, newCalories, newDescription)">Add new meal</button>
    </div>
  `
})
export class MealAddComponent {
  public onSubmitNewStrings: EventEmitter<Object>;
  constructor() {
    this.onSubmitNewStrings = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newCalories: HTMLInputElement, newDescription: HTMLInputElement) {
    this.onSubmitNewStrings.emit({name: newName.value, calories: newCalories.value, description: newDescription.value
    });
    // this.onSubmitNewStrings.emit([newName.value, newCalories.value, newDescription.value]);
    // newName.value="";
    // newCalories.value="";
    // newDescription.value="";
    }
  }
