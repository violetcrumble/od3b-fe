import styled from 'styled-components';
import { breakpoints } from '../utils/stylevars';

export const ContentWrapperConstrainedStyles = styled.main`
  margin: 0 auto;
  max-width: ${breakpoints.lg};
  padding: 20px 25px;

  @media screen and (min-width: ${breakpoints.lg}) {
    max-width: ${breakpoints.xl};
  }
`;
