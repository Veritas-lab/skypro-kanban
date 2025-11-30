import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 0;
    padding: 0;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    transition: background-color 0.3s ease, 
                color 0.3s ease, 
                border-color 0.3s ease,
                box-shadow 0.3s ease;
  }

  a, a:visited {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
    outline: none;
  }

  /* Дополнительные глобальные стили если нужно */
`;
export default GlobalStyle;
