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

    .recipe-col-3 {
      width: 100%;

      .related-products {
        .listing-card {
          margin-bottom: 20px;
        }
      }
    }
    .video-thumbnail-container {
      position: relative;
      padding-bottom: 50%;
      margin-bottom: 20px;
      img {
        position: absolute;
        max-width: 100%;
        top: 0;
        left: 0;
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
        width: 41%;
      }
      .recipe-col-2 {
        width: 34%;
        img {
          display: block;
        }
      }
      .recipe-col-3 {
        width: 23%;
      }
    }

    
  }

`;
