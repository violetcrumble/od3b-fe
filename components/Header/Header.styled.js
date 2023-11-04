import styled from 'styled-components';
import { headerHeight, themeColors } from '../../utils/stylevars';

export const HeaderStyles = styled.header`
  background-color: ${themeColors.baseColor};
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  height: ${headerHeight}px;
  padding: 10px 30px;

  .logo {
    float: left;
    margin: 10px;
    max-width: 200px;
  }
`;
