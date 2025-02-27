import styled from 'styled-components';
import { breakpoints } from '../../utils/stylevars';

export const SocialLinkStyles = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;

  li {
    display: inline;
  }

  @media (min-width: ${breakpoints.md}) { 
    min-width: 250px;
    padding: 10px 20px;
  }
`;
