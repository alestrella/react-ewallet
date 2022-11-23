import { Menu, UserName, LogOutButton, LogOutIcon, LogOutText } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../../../redux/auth/authThunk';

export const UserMenu = () => {
const dispatch = useDispatch();

  return (
    <Menu>
      <UserName>Name {''}</UserName>
      <LogOutButton type="button" onClick={() => dispatch(logOutUser())}>
        <LogOutIcon />
        <LogOutText>Exit</LogOutText>
      </LogOutButton>
    </Menu>
  );
};
