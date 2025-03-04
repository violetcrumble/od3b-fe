import styled from 'styled-components';
import { themeColors } from '../../../utils/stylevars';

export const BlogListingCardStyles = styled.div`
  
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  img {
    width: 100%;
  }

  .no-pic {
    background-color: #ccc;
    padding: 20px;
  }

  .byline-date {
    padding: 20px 20px 10px 20px;
  }

  .text-snippet {
    line-height: 140%;
    padding: 0 20px 10px 20px;

    u {
      color: ${themeColors.brandColorSecondary};
    }
  }

`;
