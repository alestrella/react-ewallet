import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const StyledButton = styled.button`
  margin: auto;
  /* padding: 12px; */
  border-radius: 50%;
  background-color: #24cca7;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 20px;
  bottom: 20px;

  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  width: 44px;
  height: 44px;

  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);

  :hover,
  :focus {
    background-color: #303f9f;
  }

  @media (${breakpoints.tablet}) {
    right: 40px;
    bottom: 40px;
  }
`;
