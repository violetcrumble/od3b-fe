import { createGlobalStyle } from 'styled-components';
import { headerHeight } from '../utils/stylevars';

export const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}
h1 {
  margin-block-start: 0;
}
`;
