import React from 'react';
import { FooterStyles } from './Footer.styled';

export default function Footer() {
  return <FooterStyles>
    <ul>
      <li><a href="https://www.youtube.com/@OneDrinkThreeBars" target="_blank" rel="noopener noreferrer">YouTube</a></li>
      <li><a href="https://www.facebook.com/onedrinkthreebars/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
      <li><a href="https://www.instagram.com/onedrinkthreebars/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
    </ul>
    <p>Copyright 2023 One Drink Three Bars</p>
  </FooterStyles>;
}
