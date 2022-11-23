import {
  Menu,
  UserName,
  LogOutButton,
  LogOutIcon,
  LogOutText,
} from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../../../redux/auth/authThunk';
import authSelectors from '../../../../redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);

  return (
    <Menu>
      <UserName>{userName}</UserName>
      <LogOutButton type="button" onClick={() => dispatch(logOutUser())}>
        <LogOutIcon />
        <LogOutText>Exit</LogOutText>
      </LogOutButton>
    </Menu>
  );
};
