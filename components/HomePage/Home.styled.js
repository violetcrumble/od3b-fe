import styled from 'styled-components';
import { breakpoints, themeColors } from '../../utils/stylevars';

export const HomeStyles = styled.main`

.recipes-section {
  h2 {
    color: #fff;
  }
}

.tequila-recipes-section {
  background-color: ${themeColors.brandColorPrimary};
}

.whiskey-recipes-section {
  background-color: ${themeColors.brandColorSecondary};
}

`;