import styled from 'styled-components';
import { breakpoints, themeColors } from '../../utils/stylevars';

export const HomeStyles = styled.main`

  .offerings {
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    flex-wrap: wrap;
    
    .offering-card {
        width: 100%;
        margin-bottom: 30px;
        background-color: ${themeColors.grayLighter};
        padding: 20px;
        border: dotted 1px;

        h3 {
          color: ${themeColors.brandColorPrimary};
        }

        a {
          display: block;
          font-weight: bold;
        }
    }
    @media (min-width: ${breakpoints.lg}) {
      border: none;
      .offering-card {
        width: 28%;
    }
    }
  }
`;