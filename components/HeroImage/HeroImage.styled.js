import styled from 'styled-components';
import { themeColors, breakpoints } from '../../utils/stylevars';

export const HeroStyles = styled.div`
    

  
  .heroContent {
    

    .youtube-button {
      background-color: ${themeColors.brandColorTertiary};
      text-decoration: none;
    }
  }

  @media (min-width: ${breakpoints.md}) {


    .heroContent {
      max-width: 780px;
      top: 150px;
      text-align: center;
      margin: 0 auto;

      h3 {
        font-size: 56px;
        padding: 0;
      }
    }
  }


`;