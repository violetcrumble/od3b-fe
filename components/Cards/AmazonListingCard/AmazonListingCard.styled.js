import styled from 'styled-components';
import { themeColors } from '../../../utils/stylevars';

export const AmazonListingCardStyles = styled.div`
  background-color: white;
  box-sizing: border-box;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  h2 {
    font-size: 16px;
    font-weight: normal;
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
    text-decoration: none;
    border-radius: 5px;
  }
  a:hover, a:active {
    background-color: ${themeColors.brandColorPrimaryLight};
  }
`;
