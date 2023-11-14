import styled from 'styled-components';
import { headerHeight, themeColors, zIndices } from '../../utils/stylevars';

export const HeaderStyles = styled.header`
  background-color: ${themeColors.baseColor};
  box-sizing: border-box;
  width: 100%;
  height: ${headerHeight}px;
  padding: 10px 30px;
  z-index: ${zIndices.header};
  position: relative;

  .logo {
    float: left;
    margin: 10px;
    max-width: 200px;
  }
`;
