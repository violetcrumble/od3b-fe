import { createGlobalStyle } from 'styled-components';
import { themeColors } from '../utils/stylevars';

const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    font-family: Helvetica, Arial, sans-serif;
    background-color: ${themeColors.grayLighter};
}
h1 {
  margin-block-start: 0;
}
`;


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
