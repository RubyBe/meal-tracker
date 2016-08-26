import { Component } from 'angular2/core';
import { Meal } from './meal.model';

// a class which holds a meal object, and a view to provide details of that meal object
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
  // a property to hold a meal object
  public meal: Meal;
}
