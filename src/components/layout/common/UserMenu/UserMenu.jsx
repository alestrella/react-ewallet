import { Menu, UserName, LogOutButton, LogOutIcon, LogOutText } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <Menu>
      <UserName>Name</UserName>
      <LogOutButton>
        <LogOutIcon />
        <LogOutText>Exit</LogOutText>
      </LogOutButton>
    </Menu>
  );
};
