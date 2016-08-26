import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-edit',
  inputs: ['meal'],
  template: `
    <div class="meal-edit-form">
      <h3>Meal Title: <input [(ngModel)]="meal.name" class="input-lg meal-edit-form"/></h3>
      <hr />
      <p>Name:</p>
      <input [(ngModel)]="meal.name" class="col-sm-8 input-lg meal-edit-form"/>
      <p>Release Date:</p>
      <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg meal-edit-form"/>
      <p>Genre:</p>
      <input [(ngModel)]="meal.description" class="col-sm-8 input-lg meal-edit-form"/>
    </div>
  `
})
export class MealEditComponent {
  public meal: Meal;
}
