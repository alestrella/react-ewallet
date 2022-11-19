import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  background-color: ${({ theme }) => theme.colors.primary};

  @media screen and (${breakpoints.tablet}) {
    padding: 20px 0;
  }

  @media screen and (${breakpoints.laptop}) {
    padding: 20px 0;
  }
`;
