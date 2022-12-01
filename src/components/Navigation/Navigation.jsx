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
import { useTranslation } from 'react-i18next';
import "../../utils/i18next"


const Navigation = () => {
   const { t } = useTranslation();  
  return (
    <NavList>          
      <Media
        query="(max-width: 767px)"
        render={() => (
          <NavItem>
            <NavigLink  to="/dashboard">
              <IconWrapper>
                <IconHome size="38px" />
              </IconWrapper>           
            </NavigLink>

            <NavigLink to="/statistic">
              <IconWrapper>
                <IconGraph size="38px" />
              </IconWrapper>              
            </NavigLink>
            <NavigLink to="/currency">
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
              <NavText>{t('links.home')}</NavText>
            </NavigLink>

            <NavigLink to="/statistic">
              <IconWrapper>
                <IconGraph size="18px" />
              </IconWrapper>
              <NavText>{t('links.statistic')}</NavText>
            </NavigLink>
          </NavItem>
        )}
      />
    </NavList>
  );
};

export default Navigation;
