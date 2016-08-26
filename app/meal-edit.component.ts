import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-edit',
  inputs: ['meal'],
  template: `
    <div class="meal-edit-form">
      <hr />
      <h3>Edit these meal details:</h3>
      <p>Name:</p>
      <input [(ngModel)]="meal.name" class="col-sm-8 input-lg meal-edit-form"/>
      <p>Calories:</p>
      <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg meal-edit-form"/>
      <p>Description:</p>
      <input [(ngModel)]="meal.description" class="col-sm-8 input-lg meal-edit-form"/>
      <hr />
    </div>
  `
})
export class MealEditComponent {
  public meal: Meal;
}
