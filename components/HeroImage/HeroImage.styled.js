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
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    margin: 0 auto;
    text-align: center;
    background-color: rgba(0, 0, 0, .6);
    padding: 10px 40px 20px 40px;
    

    h3 {
      margin-top: 20px;
      color: #fff;
      padding-bottom: 10px;
      text-decoration: none;
    }

    h1 {
      color: #fff;
    }

    p {
      line-height: 150%;
      text-shadow: black 0.1em 0.1em 0.2em
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