import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}
main {
  padding-top: 100px;
}
h1 {
  margin-block-start: 0;
}
`;
