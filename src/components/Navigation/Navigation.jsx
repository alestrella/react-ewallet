import React from 'react';
import Media from 'react-media';
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
      <Media
        query="(max-width: 767px)"
        render={() => (
          <NavItem>
            <NavigLink to="/dashboard">
              <IconWrapper>
                <IconHome size="38px" />
              </IconWrapper>
              <NavText>Home</NavText>
            </NavigLink>

            <NavigLink to="/">
              <IconWrapper>
                <IconGraph size="38px" />
              </IconWrapper>
              <NavText>Statistics</NavText>
            </NavigLink>
            <NavigLink to="/">
              <IconWrapper>
                <IconCurrency size="38px" />
              </IconWrapper>
            </NavigLink>
          </NavItem>
        )}
      />
      <Media
        query="(min-width: 768px)"
        render={() => (
          <NavItem>
            <NavigLink to="/dashboard">
              <IconWrapper>
                <IconHome size="18px" />
              </IconWrapper>
              <NavText>Home</NavText>
            </NavigLink>

            <NavigLink to="/statistics">
              <IconWrapper>
                <IconGraph size="18px" />
              </IconWrapper>
              <NavText>Statistics</NavText>
            </NavigLink>
          </NavItem>
        )}
      />
    </NavList>
  );
};

export default Navigation;
