import styled from 'styled-components';
import { themeColors } from '../../../utils/stylevars';

export const RecipeListingCardStyles = styled.div`
  
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  
  img {
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .no-pic {
    background-color: #ccc;
    padding: 20px;
  }

  .recipe-info {
    padding: 10px;
    h3 {
      font-size: 18px;
      font-weight: normal;
      text-decoration: none;
      font-weight: bold;
      color: ${themeColors.brandColorPrimary};
    }
    
  }
`;
