// import Component code from angulary library
import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent} from './meal-list.component';

// annotation
@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class = "container">
      <h1>Downtown Seattle Meal Tracker</h1>
      <meal-list [mealList]="meals"></meal-list>
    </div>
  `
})
// class declaration
export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Spaghetti", 560, "Meatsauce and chitarra pasta"),
      new Meal("Pizza", 480, "Pagliacci's Brooklyn, two slices"),
      new Meal("Salad", 295, "Arugula, oil, and vinegar")
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }

}
