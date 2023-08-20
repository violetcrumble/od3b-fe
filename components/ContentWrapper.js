import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { ContentWrapperStyles } from './ContentWrapper.styled';

export default function ContentWrapper({ children }) {
  return (
    <>
      <Header />
      <ContentWrapperStyles>
      {children}
      </ContentWrapperStyles>
      <Footer />
    </>
  );
}
