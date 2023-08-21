import styled from 'styled-components';
import { breakpoints, headerHeight } from '../utils/stylevars';

export const ContentWrapperStyles = styled.main`
  margin: 0 auto;
  max-width: ${breakpoints.lg};
  padding: 20px;

  padding-top: ${headerHeight + 30}px;

  @media screen and (min-width: ${breakpoints.lg}) {
    max-width: ${breakpoints.xl};
  }
`;
