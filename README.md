# Overbond Full Stack Challenge by Nishoake Sribavan

The following repository contains my submission for the Overbond Full Stack Challenge

## Reasoning behind your technical choices

I choose to build this project using React due to my experience with the library. I decided to modularize my code by seperating the data parsing and processing into a utility.js file and the rendering of data into the App.js component.

In terms of testing I decided to utilize the sample output given to verify my results. I found the most meaningful tests to ensure I parse the right amount of entries and the amount outstanding matched the provided graph.

## Trade-offs

I would have used another library instead of Chart.JS as I spent too much time debugging issues related to rendering.

## Available Scripts

In the project directory, you can run:

### `npm install`

Run this command first to install all dependencies in order to run the project.

### `npm start`

This allows you to locally run the project on port 3000
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

This allows you to run all the unit tests

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
