import styled from 'styled-components';
import { breakpoints } from '../utils/stylevars';

export const RecipeDetailPageStyles = styled.main`
  .breadcrumb {
    margin: 20px 0;
  }

  .recipe-detail-layout {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .recipe-col-1 {
      width: 100%; 
      img {
        max-width: 100%;
        margin-bottom: 10px;
      }
    }
    .recipe-col-2 {
      width: 100%;
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
