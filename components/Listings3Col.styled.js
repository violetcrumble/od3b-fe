import styled from 'styled-components';
import { breakpoints } from '../utils/stylevars';

export const Listing3ColStyles = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  a {
    text-decoration: none;
    color: black;
  }
  
  .listing-card {
    margin-bottom: 30px;
    width: 100%;
  }

  @media (min-width: ${breakpoints.sm}) {
    .listing-card {
      width: 100%;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    .listing-card {
      width: 32%;
    }

    > * {
      flex: 0 0 32%;
      margin: 1% 0;
    }

    > :nth-child(3n-1) {
        margin-left: 2%;
        margin-right: 2%;
    }
  }
`;
