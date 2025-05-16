import styled from 'styled-components';
import { breakpoints } from '../utils/stylevars';

export const FriendsStyles = styled.main`
  
  .listing-card {
    width: 90%;
    margin-bottom: 30px;
  }

  .creator-info {
    a {
      text-decoration: underline;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    .friend-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .listing-card {
      width: 27%;
      margin-right: 2%;
    }
  }
}


`;