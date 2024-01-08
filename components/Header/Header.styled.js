import styled from 'styled-components';
import { headerHeight, headerHeightMobile, themeColors, zIndices, breakpoints } from '../../utils/stylevars';

export const HeaderStyles = styled.header`
  background-color: ${themeColors.baseColor};
  box-sizing: border-box;
  width: 100%;
  height: ${headerHeightMobile}px;
  padding: 10px 20px;
  z-index: ${zIndices.header};
  position: relative;

  .logo {
    float: left;
    margin: 5px;
    width: 120px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    height: ${headerHeight}px;
    padding: 10px 30px;
    
    .logo {
      margin: 10px;
      width: 200px;
    }
    }
`;
