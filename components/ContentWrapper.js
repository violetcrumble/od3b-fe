import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function ContentWrapper({ children }) {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
}
