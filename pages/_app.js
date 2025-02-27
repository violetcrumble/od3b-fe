import { createGlobalStyle } from 'styled-components';
import { themeColors } from '../utils/stylevars';
import { montserrat } from '../utils/fonts';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

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
  font-size: 20px;
  padding: 20px 0 10px 0;
}
h2, h3 {
  margin-block-start: 0;
  color: ${themeColors.brandColorSecondary};
  font-size: 18px;
}
p, li {
  font-size: 14px;
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
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      </div>
    </>
  );
}

export default MyApp;
