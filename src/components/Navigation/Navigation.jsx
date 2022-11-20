import React from 'react';
// import {
//   HomeFilled,
// } from '@ant-design/icons';
// import { Space } from 'antd';
// import sprite from './sprite.svg';
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
        <NavigLink>
          <IconWrapper>
            <IconHome size="18px" />
          </IconWrapper>
          <NavText>Home</NavText>
        </NavigLink>

        <NavigLink>
          <IconWrapper>
            <IconGraph size="18px" />
          </IconWrapper>
          <NavText>Statistics</NavText>
        </NavigLink>
        <NavigLink>
          <IconWrapper>
            <IconCurrency size="18px" />
          </IconWrapper>
        </NavigLink>
      </NavItem>
    </NavList>  
  );
};

export default Navigation;
