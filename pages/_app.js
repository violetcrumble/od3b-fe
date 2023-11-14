import { createGlobalStyle } from 'styled-components';
import { themeColors } from '../utils/stylevars';
import { montserrat } from '../utils/fonts';

const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    font-family: Helvetica, Arial, sans-serif;
    background-color: ${themeColors.grayLighter};
}
h1 {
  color: ${themeColors.brandColorPrimary};
}
h2, h3 {
  margin-block-start: 0;
  color: ${themeColors.brandColorSecondary};
}
a:link, a:visited {
  color: ${themeColors.brandColorSecondary};
}
a:hover, a:active {
  text-decoration: none;
}
`;


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <div className={montserrat.className}>
      <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
