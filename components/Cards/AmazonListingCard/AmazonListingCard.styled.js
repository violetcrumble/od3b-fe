import styled from 'styled-components';
import { themeColors } from '../../../utils/stylevars';

export const AmazonListingCardStyles = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  display: flex;

  h2 {
    font-size: 16px;
  }

  .product-info {
    
    padding: 10px;
    width: 50%;
  }

  .product-pic {
    margin: 15px;
    width: 50%;
    text-align: center;
    position: relative;
    min-height: 160px;
  }

  a:link, a:visited {
    background-color: ${themeColors.brandColorPrimary};
    display: block;
    color: #fff;
    padding: 3px;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
  }

  a:hover, a:active {
    background-color: ${themeColors.brandColorPrimaryLight};
  }
`;
