# App intro

This is a small React app that shows a list of products to the user, and then the user can add products to their cart and change the quantity of the products in their cart. 

## Technologies used: 

React, redux-toolkit, react-redux, react-router, typescript, react-testing-library, sass, storybook, eslint.


*I consider this small project to be a part of the big real project, so I use Redux to center the states. Therefore, this project can be easily expanded in the future.*
#### Environmental versions: 
- node: ^16.11.29
- npm: ^8.3.1

## Project structure 
This project is built from 'create-react-app' with a typescript template.
Then in the 'src' folder, I change the content of files 'App.tsx' and 'index.tsx'. I added the following folders:
+ assets:
  - *This folder contains images used in the project.*
+ components:
  - *This folder contains reuseable components in the project.*
+ data:
  - *This folder contains static data.*
+ dataModels:
  - *This folder contains data models as typescript interfaces.*
+ redux:
  - *This folder contains folders and files for building redux structures (involving slices, store).*
+ screens:
  - *This folder contains components building screens respectively.*
+ styles:
  - *This folder contains variables.scss and App.scss.*
+ stories:
  - *This folder contains storybook for the reuseable components respectively.*

## UI guide
First, as default, you are on the home page screen. The navigation bar is on top, and it's available on all screens. In the navigation bar, there is a logo on the left and two buttons on the right. One button is for navigating to the home page and the other is for navigating to the cart page. 

On the home page screen, you can see a list of product cards. Each product card involves the image, name, and price of one product. It also has two buttons. One button is for navigating to the product details page, the one left is for adding the product to the cart.

On the product details page, you can see more details about the product. And you can also change the quantity and add the product to the card.

On the cart page, you see a table showing products added to the cart and their corresponding quantity. You can also change the quantity of each product if you want. If the quantity is less than or equal to zero, the product will be automatically deleted from the cart.

## How to run this app

In the project directory:

### Firstly, you need to install dependencies
Write these following commands:
1. `npm install`  
(to downloads dependencies defined in a package. json file and generates a node_modules folder with the installed modules.)
2. `npm install --dev`  
(to downloads devDependencies defined in a package. json file and generates a node_modules folder with the installed modules.)

### To run the app
`npm start`  
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### To run component tests
`npm run test`  
After entering this cmd, the tests will be executed. 
### To run storybook
`npm run storybook`  
After entering this cmd, the storybook will be executed.
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.
## Author
Nam Henry
