import styled from 'styled-components';
import { breakpoints } from '../../../utils/stylevars';

export const CreatorCardStyles = styled.div`
  
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  a {
    text-decoration: underline;
  }

  .creator-image-container {
    margin: 20px auto;
    text-align: center;
    position: relative;
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
