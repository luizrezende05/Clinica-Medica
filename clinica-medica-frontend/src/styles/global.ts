import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Fontes e suavização */
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    background-color: #f9fafb;
    color: #2c3e50;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    padding: 20px;
  }

  code {
    font-family: 'Source Code Pro', Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    background-color: #eaeaea;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.95em;
  }

  a {
    color: #2980b9;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: #1c5980;
      outline: none;
      text-decoration: underline;
    }
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input, select, textarea, button {
    font-family: inherit;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    background-color: #2980b9;
    border: none;
    color: white;
    padding: 10px 16px;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover,
    &:focus {
      background-color: #1c5980;
      outline: none;
    }
  }
`;

export default GlobalStyle;
