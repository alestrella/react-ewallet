import LanguageFlags from 'components/Localisation/LanguageFlags';
import { AppLogo } from '../Logo/Logo';
import { UserMenu } from '../UserMenu/UserMenu';
import { HeaderContainer, HeaderStyle } from './Header.style';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderStyle>
        <AppLogo />
        <LanguageFlags />
        <UserMenu />
      </HeaderStyle>
    </HeaderContainer>
  );
};
