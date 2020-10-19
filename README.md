# Sigma Rail Front-end test.

## 1. Setup

This application is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To start the app simply run:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To create a production-ready build of the application, run `yarn build`, and `yarn start` to preview it.

## 2. Architecture of the application.

The app is organized as follows:

- `/components`: UI components, each with SCSS modules and tests.
- `/pages`: next pages/routes, decoupled from styles, pure scaffolding.
- `/providers`: redux-toolkit provider (actions, selectors...), store and tests.
- `/public`: assets.
- `/styles`: global styles and variables available to every component.

This app, although it's a very lightweight exercise, it's packed with overkill tools such as [Redux toolkit](https://redux-toolkit.js.org/) in order to showcase what can be done (with a complex state manager, in this case), and potentially be more scalable in the future.

It uses [Jest](https://jestjs.io/) for functional and snapshot testing. More about this down below. The reasons for using Jest are its simplicity but also the amount of test coverage it can provide with the different types of tests that it supports.

For the styles, the application uses an extensible global styles file, but then it uses CSS modules (or, in this case, SASS/SCSS modules) in each component. Although the modules already provide distinct naming for the classes and one can argue that SASS is not necessary, it's cleaner and easier to organize by nesting the styles too.

## 3. Testing.

You can run `yarn test` or `yarn test --coverage` to run the suite of tests available in the application and also check the coverage of the tests in the code. The coverage could be higher (specially on complex components such as `Input`), but there was a lot to test for the time available.

The tests implemented are:
- Functional tests (component rendering, snapshots...) on every component.
- Unit tests (reducers, API calls...) on `providers/api`

I didn't have the time to implement integration nor end-to-end tests yet.
<!-- TODO: implement those! -->
I didn't set any CI tools on the project because this demo project is not going to have feature PRs, but I would add GitHub Hooks with `jest` on pre-commit if that were the case (among other tools, depending on the needs of the project).

## 4. Performance

You can check the optimized build lighthouse report ([lighthouse.json](./lighthouse.json)) on [this online viewer](https://googlechrome.github.io/lighthouse/viewer/). Normally I wouldn't include this file on the repo, but I did it to showcase the performance of Nextjs and the production app easily without having to install dependencies and compile the project.
