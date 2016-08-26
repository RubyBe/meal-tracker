# _Meal Tracker_

#### By _**Sid Benavente**_

## Description/Specifications

##### An application which allows tracking daily meals and nutritional content, built with Javascript and Angular 2

##### User Scenarios
* I want to log a food I have eaten by submitting a form with food name, calories and details.
* I want to view a list of foods I have logged.
* I want options to view all foods, only high-calorie foods (more than 500 calories), or only lower-calorie foods (less than 500 calories).
* I want to click a food to edit its name, details or calories.


###### Component Tree
| Component     | Description          | File | Properties/Methods |
| ------------- |-------------| ----- | -----|
|Main| A class that manages bootstrapping the application | main.ts | name: string, calories: number, description: string |
|AppComponent| Top level parent component | app.component.ts | tbd |
|MealComponent| A class that defines a meal object | meal.component.ts | tbd |
|MealListComponent| A class that lists all meal objects | meal-new.component.ts | tbd |
|MealNewComponent| A class that manages creating a new meal object | meal-new.component.ts | tbd |
|MealEditComponent| A class that manages editing an existing meal object | meal-edit.component.ts | tbd |

#### Use this program
Clone this repository.

Part 1. Clone this repository.

Part 2. Run server and access the web app.

Prepare your machine by following the [instructions here.](https://www.learnhowtoprogram.com/javascript/getting-started-with-javascript-2f9a73dc-b7f5-4a22-9101-e69d49f552ac/javascript-installation-and-setup-homework)
To start the local server:
* run npm install
* run npm start
Local server will automatically launch browser window

#### Known Bugs / Unimplemented Features
TBD

#### Support and contact details
Please contact the authors if you have any questions or comments.

#### Technologies Used
This web application was created using Javascript and Angular 2

#### License
Copyright (c) 2016 _**Sid Benavente**_

This software is licensed under the MIT license.
