import styled from 'styled-components';
import { themeColors } from '../../utils/stylevars';

export const HomeStyles = styled.main`

.recipes-section {
  h1, p {
    color: #fff;
  }
  h1 {
    text-decoration: none;
  }
}

.tequila-recipes-section {
  background-color: ${themeColors.brandColorSecondary};
}

.whiskey-recipes-section {
  background-color: ${themeColors.brandColorPrimary};
}

.rum-recipes-section {
  background-color: ${themeColors.brandColorSecondary};
}

`;