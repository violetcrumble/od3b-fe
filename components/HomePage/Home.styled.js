import styled from 'styled-components';
import { themeColors } from '../../utils/stylevars';

export const HomeStyles = styled.main`

.recipes-section {
  h2, p {
    color: #fff;
  }
}

.tequila-recipes-section {
  background-color: ${themeColors.brandColorSecondary};
}

.whiskey-recipes-section {
  background-color: ${themeColors.brandColorPrimary};
}

`;