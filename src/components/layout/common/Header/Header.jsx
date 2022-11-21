import { AppLogo } from '../Logo/Logo';
import { UserMenu } from '../UserMenu/UserMenu';
import { HeaderStyle } from './Header.style';

export const Header = () => {
  return (
    <HeaderStyle>
      <AppLogo />
      <UserMenu/>
    </HeaderStyle>
  );
};
