# dashboard-material-nextjs-ts

## Getting Started

## Bootstrapped

The following steps were used to bootstrap the project

1. npm init -y
2. npm install --save react react-dom next lodash @material-ui/core @material-ui/icons recharts
3. npm i -D typescript tslint tslint-react @types/lodash @types/react @types/react-dom @types/recharts @types/node
4. mkdir pages

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

```
./node_modules/.bin/tslint --init
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

