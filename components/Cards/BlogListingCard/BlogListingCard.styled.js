import styled from 'styled-components';
import { themeColors } from '../../../utils/stylevars';

export const BlogListingCardStyles = styled.div`
  
  background-color: white;

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
