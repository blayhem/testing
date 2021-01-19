# Learning frontend testing.

## 1. What is this project.

Of all the projects I've been working on at the moment of writing this ([Global Forest Watch](https://github.com/vizzuality/gfw), [Open Timber Portal](https://github.com/vizzuality/otp-portal), [USA Resilience](https://github.com/vizzuality/usa-resilience-opportunity-map), [Copernicus Climate](https://github.com/vizzuality/copernicus-climate) and many others), none of them include tests.

I decided to learn more about TDD and testing frameworks in Javascript, and I did this small project to learn about them.

![screenshot](https://api.microlink.io/?url=https://testing.dfr.vercel.app&meta=false&screenshot&overlay.browser=dark&embed=screenshot.url)

## 2. Testing.

It uses [Jest](https://jestjs.io/) for functional and snapshot testing. The reasons for using Jest are its simplicity but also the amount of test coverage it can provide with the different types of tests that it supports. For more advanced integration/e2e tests it uses [Cypress](https://www.cypress.io).

To run the suite of tests available in the application and also check the coverage of the tests in the code, run:

```
yarn test

// or

yarn test --coverage
```

The coverage could be higher (specially on complex components such as `Input`), but this project is a work in progress, and I may add more content in the future.

The tests implemented are:

-   **Unit tests** (component rendering, snapshots...) on every component.
-   **Functional unit tests** (reducers, API calls...) on `providers/api`
-   Some **integration tests** with enzyme and react-testing-library (check the `header` and `main` components) to try basic interaction on React elements.
-   Some "happy path" **end-to-end** tests with cypress (check the `cypress/integration` folder). Run `yarn cypress:open` to run the suite.

I didn't set any CI tools jet, but I want to add GitHub Hooks with `jest` on push/PR in the near future.

## 3. Setup

This application is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To start the app simply run:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To create a production-ready build of the application, run `yarn build`, and `yarn start` to preview it.

## 4. Architecture of the application.

The app is organized as follows:

-   `/components`: UI components, each with SCSS modules and tests.
-   `/cypress`: cypress test files (more in the 'Testing' section below).
-   `/pages`: next pages/routes, decoupled from styles, pure scaffolding.
-   `/providers`: redux-toolkit provider (actions, selectors...), store and tests.
-   `/public`: assets.
-   `/styles`: global styles and variables available to every component.

This app, although it's a very lightweight exercise, it's packed with overkill tools such as [Redux toolkit](https://redux-toolkit.js.org/) in order to showcase what can be done (with a complex state manager, in this case), and play with the integration of such libraries and the testing tools.

For the styles, the application uses an extensible global styles file, but then it uses CSS modules (or, in this case, SASS/SCSS modules) in each component. Although the modules already provide distinct naming for the classes and one can argue that SASS is not necessary, it's cleaner and easier to organize by nesting the styles too.
