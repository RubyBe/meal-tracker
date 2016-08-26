import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-edit',
  inputs: ['meal'],
  template: `
    <div class="meal-edit-form form-group">
      <label for="name">Name</label>
      <input [(ngModel)]="meal.name" class="form-control meal-edit-form"/>
      <label for="calories">Calories</label>
      <input [(ngModel)]="meal.calories" class="form-control meal-edit-form"/>
      <label for="description">Description</label>
      <input [(ngModel)]="meal.description" class="form-control meal-edit-form"/>
      <hr />
    </div>
  `
})
export class MealEditComponent {
  public meal: Meal;
}
