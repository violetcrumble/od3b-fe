import styled from 'styled-components';
import { themeColors } from '../../../utils/stylevars';

export const RecipeListingCardStyles = styled.div`
  
  background-color: white;

  img {
    width: 100%;
  }

  .no-pic {
    background-color: #ccc;
    padding: 20px;
  }

  .recipe-info {
    padding: 10px;
    h2 {
      font-size: 18px;
      font-weight: normal;
      text-decoration: none;
      font-weight: bold;
      color: ${themeColors.brandColorPrimary};
    }
    
  }
`;
