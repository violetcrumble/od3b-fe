import { createGlobalStyle } from 'styled-components';
import { themeColors } from '../utils/stylevars';
import { montserrat } from '../utils/fonts';
import Script from "next/script";

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
      <Script
        id="google-tag-manager"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <GlobalStyles />
      <div className={montserrat.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
