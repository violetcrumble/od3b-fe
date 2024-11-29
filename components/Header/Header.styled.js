import styled from 'styled-components';
import { headerHeight, headerHeightMobile, themeColors, zIndices, breakpoints } from '../../utils/stylevars';

export const HeaderStyles = styled.header`
  background-color: ${themeColors.baseColor};
  box-sizing: border-box;
  width: 100%;
  height: ${headerHeightMobile}px;
  z-index: ${zIndices.header};
  position: relative;
  display: flex;
  justify-content: space-between;
  height: ${headerHeight}px;    
    
  .logo {
    display: block;
    width: 100px;
    padding: 10px 20px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    .logo {
      display: block;
      width: 150px;
      padding: 10px 20px;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }


`;
