import styled from 'styled-components';
import { themeColors } from '../../utils/stylevars';

export const HomeStyles = styled.main`

.recipes-section {
  h1, p {
    color: #fff;
    padding: 0;
  }
}

.tequila-recipes-section {
  background-color: ${themeColors.brandColorSecondary};
}

.whiskey-recipes-section {
  background-color: ${themeColors.grayDarker};
}

.rum-recipes-section {
  background-color: ${themeColors.brandColorSecondary};
}

`;