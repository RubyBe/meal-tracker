import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calorieFilter",
  pure: false
})
export class CalorieFilterPipe implements PipeTransform {
  transform(input: Meal[], info) {
    var desiredCalories = info[0];
    var output: Meal[]=[];
    if(desiredCalories==="fewer") {
      for (var i=0; i < input.length; i++) {
        if(input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredCalories==="greater") {
      for (var i=0; i < input.length; i++) {
        if(input[i].calories > 499) {
          output.push(input[i]);
      }
    }
    return output;
    } else {
        return input;
     }
  }
}
