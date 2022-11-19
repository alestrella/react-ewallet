import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 20px;

  @media screen and (${breakpoints.tablet}) {
  padding: 0 32px;

  @media screen and (${breakpoints.laptop}) {
    padding: 0 16px;
  }
}
`;


