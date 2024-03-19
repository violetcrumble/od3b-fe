import styled from 'styled-components';
import { breakpoints } from '../../../utils/stylevars';

export const CreatorCardStyles = styled.div`
  
  background-color: white;
  padding: 20px;

  a {
    text-decoration: underline;
  }

  .creator-image-container {
    margin: 20px auto;
    text-align: center;
  }

  p {
    line-height: 140%;
  }

  img {
    margin-left: 20px;
  }

  @media (min-width: ${breakpoints.md}) {
    .creator-info {
      display: flex;
    }
  }


`;
