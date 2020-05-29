# Star Wars App

## Quick app overview

This simple app fetches starships data from _[https://swapi.apis.guru/](https://swapi.apis.guru/)_ and renders starships cards components with the following info:
- name of the starship
- manufacturers
- cost
- Add to basket button
- Remove from basket button

On the very top of the app, there is a header with basket count (it counts the number of starships added to the basket).

You can add any number (integer) of starships to the basket, if the starship is already in the basket, the number of it will be updated in the app's state.
While adding a starship it automatically activates the "Remove from basket" button. You can choose to remove starships from range between 1 and maximum number of a given starship in the basket.

## Quick tech overview
The app is based on React and Redux, I added some simple quick styles using styled components, there's also a linter.

### Scripts
- start:dev - it starts the app in development mode
- start:prod - it starts the express production server
- build - it builds the production version
