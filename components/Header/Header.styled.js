import styled from 'styled-components';
import { headerHeight, themeColors } from '../../utils/stylevars';

export const HeaderStyles = styled.header`
  background-color: ${themeColors.baseColor};
  width: 100%;
  position: fixed;
  height: ${headerHeight}px;

  .logo {
    float: left;
    margin: 10px;
    max-width: 200px;
  }
`;
