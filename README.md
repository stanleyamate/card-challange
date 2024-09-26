# React Card Challenge

### Project Overview

This project is a responsive card component implemented using React, TypeScript, and Tailwind CSS. The component is designed to be mobile-first responsive and follows best practices for reusable code in React.

### Tools Used

React: A JavaScript library for building user interfaces
TypeScript: A superset of JavaScript for static type checking and code maintainability
Tailwind CSS: A utility-first CSS framework for styling and layout
Storybook: A tool for building and testing UI components in isolation
Vercel: A platform for hosting and deploying web applications
GitHub: A version control system for managing and sharing code

### How to Run the Project

#### Clone the repository:

Run git clone https://github.com/stanleyamate/card-challenge.git to clone the project repository to your local machine.

#### Install dependencies:

Enter the cloned Repo and Run npm install to install the project dependencies. npm install

#### Start the development server:

Run npm start to start the development server.

#### Open in browser:

Open http://localhost:5173/ in your web browser to view the page.

#### Run Storybook:

Run npm run storybook to start Storybook and open http://localhost:6006/ in your web browser to view the component in isolation.

### Note:

This project uses Vercel for hosting, so you can also view the deployed version of the project by visiting the Vercel deployment URL. https://card-challange.vercel.app/

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

# card-challange
