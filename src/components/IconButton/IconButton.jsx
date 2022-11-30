import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './IconButton.styled';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <StyledButton type="button" onClick={onClick} {...allyProps}>
    {children}
  </StyledButton>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  // 'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
