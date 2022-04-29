# Getting Started with Create React App

Technologies used: react, redux, react-redux, react-router

I consider this small project to be a part of the big real project, so I use Redux to center the states. Therefore, this project can be easily expanded in the future.

First, as default, you are on the home page screen. The navigation bar is on top, and it's available on all screens. In the navigation bar, there is a logon on the left and two buttons on the right. One button is for navigating to the home page and the other is for navigating to the cart page. On the home page screen, you can see a list of products. Each product card involves the image, name, and price of one product. It also has two buttons. One button is for navigating to the product details page, the one left is for adding the product to the cart.

On the product details page, you can see more details about the product. And you can also change the quantity and add the product to the card.

On the cart page, you see a table showing products added to the cart and their corresponding quantity. You can also change the quantity of each product if you want. If the quantity is less than or equal to zero, the product will be automatically deleted from the cart.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
