# Angular Recipe and Shopping List App

This is an Angular application that allows users to manage recipes and create a shopping list. The app uses Firebase Realtime Database for storing and fetching recipes, and it also supports user authentication using email and password.

## Features

- Create, modify, and delete recipes
- Store and fetch recipes from Firebase Realtime Database
- User registration and login
- Manage ingredients and quantities in the shopping list
- Transfer ingredients from recipe component to the shopping list
- State management using NgRx library

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- Angular CLI
- Firebase account and project
- Firebase Realtime Database set up

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the project dependencies.

## Configuration

1. Create a Firebase project and set up Firebase Realtime Database.
2. Update the Firebase configuration in `src/environments/environment.ts` and `src/environments/environment.prod.ts` files with your Firebase project settings.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` to access the application.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via Karma.

## Further help

If you have any questions or need further assistance, feel free to contact the app developer.

