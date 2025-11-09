import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background-primary: #f1f1f1;
    --background-secondary: #ffffff;
    --background-tertiary: #eaeef6;
    --text-primary: #000000;
    --text-secondary: #94a6be;
    --text-tertiary: #565eef;
    --border-color: #d4dbe5;
    --shadow-color: rgba(0, 0, 0, 0.1);
    --hover-primary: #33399b;
    --error-color: #ff3333;
    --success-color: #06b16e;
  }

  [data-theme="dark"] {
    --background-primary: #1a1a1a;
    --background-secondary: #2d2d2d;
    --background-tertiary: #3a3a3a;
    --text-primary: #ffffff;
    --text-secondary: #b0b0b0;
    --text-tertiary: #7678ed;
    --border-color: #404040;
    --shadow-color: rgba(0, 0, 0, 0.3);
    --hover-primary: #4a52d4;
    --error-color: #ff6b6b;
    --success-color: #4caf50;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--background-primary);
    color: var(--text-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
    outline: none;
  }

  .container {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
  }

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }
`;
