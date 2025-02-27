import styled from 'styled-components';
import { themeColors, breakpoints } from '../../utils/stylevars';

export const HeroStyles = styled.div`
    position: relative;
    width: 100%;

    .imageWrapper {
      z-index: -1;
    }
  
  .heroContent {
    position: relative;
    margin: 0 20px;

    h3 {
      color: #fff;
      font-size: 36px;
      text-shadow: black 0.1em 0.1em 0.2em;
      padding: 40px 0;
    }

    a {
      color: #fff;
    }

    .youtube-button {
      background-color: ${themeColors.brandColorTertiary};
      color: white;
      text-decoration: none;
      padding: 10px;
      font-weight: bold;
      text-shadow: black 0.1em 0.1em 0.2em;
      border-radius: 5px;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    height: 60vh;

    .heroContent {
      max-width: 600px;
      
    top: 110px;
    }
  }


`;