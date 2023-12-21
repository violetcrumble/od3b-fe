import styled from 'styled-components';
import { themeColors, breakpoints } from '../utils/stylevars';

export const RecipeDetailPageStyles = styled.main`
  .breadcrumb {
    margin: 20px 0;
  }

  .youtube-button {
      background-color: ${themeColors.brandColorTertiary};
      color: white;
      text-decoration: none;
      padding: 20px;
      font-weight: bold;
      text-shadow: black 0.1em 0.1em 0.2em;
      
    }

  .recipe-detail-layout {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .recipe-col-1 {
      width: 100%; 

      .recipe-intro,
      .recipe-ingredients,
      .recipe-technique {
        margin-bottom: 30px;
        line-height: 150%;
      }
      .recipe-ingredients {
        border-bottom: dotted 1px;
      }
      
    }
    .recipe-col-2 {
      width: 100%;
        img {
        max-width: 100%;
        margin-bottom: 10px;
        border: solid 1px black;
      }
    }
  }

  @media (min-width: ${breakpoints.md}) {
    .recipe-detail-layout {
      .recipe-col-1 {
        width: 48%;
      }
      .recipe-col-2 {
        width: 48%;
      }
    }
  }

`;
