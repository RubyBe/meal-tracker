import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
  <table class="table table-condensed">
    <tr>
      <th class="col-md-4">Meal</th>
      <th class="col-md-6">Description</th>
      <th class="col-md-2">Calories</th>
    </tr>
    <tr>
      <td>{{meal.name}}</td>
      <td>{{meal.description}}</td>
      <td>{{meal.calories}}</td>
    </tr>
  </table>
  `
})
export class MealComponent {
  public meal: Meal;
}
