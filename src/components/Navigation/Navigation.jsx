import React from 'react';
import {
  NavigLink,
	NavList,
  NavItem,
	IconHome,
	IconWrapper,
  NavText,
  IconGraph,
  IconCurrency,
} from './Navigation.style';

const Navigation = () => {
	return (
    <NavList>
      <NavItem>
        <NavigLink to="/">
          <IconWrapper>
            <IconHome size="18px" />
          </IconWrapper>
          <NavText>Home</NavText>
        </NavigLink>

        <NavigLink to="/">
          <IconWrapper>
            <IconGraph size="18px" />
          </IconWrapper>
          <NavText>Statistics</NavText>
        </NavigLink>
        <NavigLink to="/">
          <IconWrapper>
            <IconCurrency size="18px" />
          </IconWrapper>
        </NavigLink>
      </NavItem>
    </NavList>
  );
};

export default Navigation;
