# Try to invest:

The main focus of this product will be to help me to calculate interest for certificates of deposits.​

## How to run the app?

In the project directory, you can install all dependencies and start the application, please follow the next steps:

### Set 'environment variables'

Execute the next command: `cp .env.example .env`

It's going to create a new `.env` file, using as template the file `env.example`.

Now you can update the required environment variables in this file.

### `npm install` | `yarn install`

Install all dependencies from `package.json` file.

### `npm start` | `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## About the project

This project was created with a `create-react-app` command.

### Folder Structure

- node_modules/
- public/
  - assets/
  - index.html
- src/
  - components/
  - config/
  - hooks/
  - routers/
  - screens/
    - layout/
  - services/
  - store/
  - types/
  - utils/
- .env
- .env.example
- .gitignore
- package.json
- README.md
- tsconfig.json
- tslint.json

### Implemented technologies/libraries

- `react-router-dom`: [Official documentation](https://www.npmjs.com/package/react-router-dom)
- `react hooks`: [Oficial documentation](https://reactjs.org/docs/hooks-intro.html)
- `easy-peasy`: [Official documentation](https://github.com/ctrlplusb/easy-peasy)
- `Material UI`: [Official documentation](https://material-ui.com/layout/grid/)
- `styled-components`: [Official documentation](https://www.styled-components.com/)
- `use-react-router`: [Official documentation](https://github.com/CharlesStover/use-react-router)

## Available Scripts/Commands

In the project directory, you can run these commands:

### `npm install` | `yarn install`

Install all dependencies from `package.json` file.

### `npm start` | `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm build` | `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## VSC EDITOR SETTINGS

to set prettier rules on save in VSC add the next configuration:

- Install the ESLint and Prettier VSCode extensions:
  `ext install esbenp.prettier-vscode dbaeumer.vscode-eslint`
- Update settings.json in VSC add: <br>
  `"editor.formatOnSave": true, "eslint.validate": [ "javascript", "javascriptreact", { "language": "typescript", "autoFix": true }, { "language": "typescriptreact", "autoFix": true } ]`
