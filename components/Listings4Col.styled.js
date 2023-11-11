import styled from 'styled-components';
import { breakpoints } from '../utils/stylevars';

export const Listing4ColStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  .listing-card {
    margin-bottom: 30px;
    width: 100%;
  }

  @media (min-width: ${breakpoints.sm}) {
    .listing-card {
      width: 48%;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    .listing-card {
      width: 31%;
    }
  }

  @media (min-width: ${breakpoints.lg}) {
    .listing-card {
      width: 23%;
    }
  }
`;
