import styled from 'styled-components';
import { themeColors, breakpoints } from '../utils/stylevars';

export const RecipeDetailPageStyles = styled.main`
  .breadcrumb {
    margin: 10px 0;
  }

  .youtube-button {
      background-color: ${themeColors.brandColorTertiary};
      color: white;
      text-decoration: none;
      padding: 10px;
      font-weight: bold;
      text-shadow: black 0.1em 0.1em 0.2em;
      margin: 20px 0;
    }

  .recipe-detail-layout {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .recipe-col-1 {
      width: 100%; 

      .recipe-intro,
      .recipe-ingredients {
        line-height: 150%;
      }
      .recipe-ingredients {
        
        .recipe-ingredients-columns {
          display: flex;
          justify-content: space-between;

          .recipe-ingredients-text {
            p {
              padding-top: 0;
              margin-top: 0;
            }
          }
          
        }
      }
    }
    .recipe-col-2 {
      width: 100%;

        img {
        max-width: 500px;
        margin-bottom: 10px;
        display: none;
      }
    }

    .related-products {
      .listing-card {
        margin-bottom: 20px;
      }
    }
  }

  @media (min-width: ${breakpoints.md}) {
    .breadcrumb {
    margin: 20px 0;
  }

  .recipe-ingredients {
    padding-bottom: 35px;
  }

  .recipe-ingredients-list {
    
    margin-bottom: 20px;
    background-color: #fff;
    padding: 20px;

    .recipe-ingredients-list-inside {
      columns: 2;
    }
  }
    
    .mobile-recipe-image {
      display: none;
    }
    .recipe-detail-layout {
      .recipe-col-1 {
        width: 48%;
      }
      .recipe-col-2 {
        width: 48%;

        img {
          display: block;
        }
      }
    }

    .related-products {
      .related-product-cards {
        display: flex;
        .listing-card {
          margin-right: 20px;
        }
      }
    }
  }

`;
