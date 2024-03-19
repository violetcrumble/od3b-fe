import styled from 'styled-components';
import { breakpoints } from '../utils/stylevars';

export const Listing3ColStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

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
      width: 29%;
    }
  }
`;
