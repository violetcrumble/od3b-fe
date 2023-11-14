import React from 'react';
import { FooterStyles } from './Footer.styled';
import SocialLinks from '../SocialLinks/SocialLinks';

var currentTime = new Date();

export default function Footer() {
  return <FooterStyles>
    <SocialLinks />
    <p>Copyright &copy; {currentTime.getFullYear()} One Drink Three Bars</p>
  </FooterStyles>;
}
