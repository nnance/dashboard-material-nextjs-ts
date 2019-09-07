# dashboard-material-nextjs-ts

A minimal dashboard with taskbar and mini variant draw. The chart is courtesy of Recharts, but it is simple to substitute an alternative.

## Tech Stack

* [Nextjs](https://nextjs.org/)
* [React](https://reactjs.org/)
* [Material-UI](https://material-ui.com/)

## Project Structure

This branch has an express server that serves the dashboard data and the static web application once it's built.  The source for the entire application (Server/Client) is in the `./src` folder and is written to the `./build` folder during build.

The project source is organized as follows:

* `./pages` contains the required react app base files
* `./pages/app` contains the react app dashboard code
* `./pages/api` source for the api server
* `./pages/structs` contains the shared data structures used by the client and server

## Getting started

Install dependencies

```ssh
> npm install
```

To run the application in development mode with live rebuild and reload

```ssh
> npm run dev
```

## Bootstrapped

The following steps were used to bootstrap the project

```ssh
> npm init -y
> npm install --save react react-dom next lodash @material-ui/core @material-ui/icons recharts
> npm i -D typescript tslint tslint-react @types/lodash @types/react @types/react-dom @types/recharts @types/node
> mkdir pages
```

Then open the `package.json` file and replace scripts with the following:

```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

Configuring tslint 

Initialize tslint config file

```ssh
> ./node_modules/.bin/tslint --init
```

by replacing the extends block of tslint.json

```json
    "extends": [
        "tslint:recommended",
        "tslint:react"
    ],

```

We'll also need a page to render, let's create pages/index.tsx with the following content:

```tsx
const Home = () => <h1>Hello world!</h1>;

export default Home;
```

Now everything is ready. Run the following command to start the dev server:

```
npm run dev
```

