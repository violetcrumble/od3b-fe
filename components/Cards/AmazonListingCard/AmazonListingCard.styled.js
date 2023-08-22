import styled from 'styled-components';
import { themeColors } from '../../../utils/stylevars';

export const AmazonListingCardStyles = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
  box-sizing: border-box;
  display: flex;

  h2 {
    font-size: 16px;
  }

  .product-info {
    background-color: #ddd;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
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
    border-radius: 10px;
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
