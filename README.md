# Sigma Rail Front-end test.

## 1. Setup

This application is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To start the app simply run:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 2. Architecture of the application.

This app, although it's a very lightweight exercise, it's packed with overkill tools such as [Redux](https://redux-toolkit.js.org/) in order to showcase what can be done, and potentially be scalable in the future.

It uses [Jest](https://jestjs.io/) for functional and snapshot testing. More about this down below.

The app is organized as follows:

```
.
├── components -> UI components, each with SCSS modules and tests.
├── pages -> next pages/routes, decoupled from styles, pure scaffolding.
├── public -> assets.
└── styles -> global styles and variables available to every component.
```

## 3. Testing.

You can run `yarn test` or `yarn test --coverage` to run the suite of tests available in the application and also check the coverage of the tests in the code.

The tests implemented are:
<!-- TODO: expand this section -->
- Functional tests (component rendering, snapshots...)
- Unit tests (reducers, API calls...)
- Integration tests
