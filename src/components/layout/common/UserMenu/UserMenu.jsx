import {
  Menu,
  UserName,
  LogOutButton,
  LogOutIcon,
  LogOutText,
} from './UserMenu.styled';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../../../redux/auth/authThunk';
import authSelectors from '../../../../redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);

  return (
    <Menu>
      <UserName>
        <Avatar
          color={'#4A56E2'}
          name={userName}
          size="30"
          textMarginRatio={0.1}
          textSizeRatio={2}
          round={true}
          maxInitials="2"
        />
      </UserName>
      <LogOutButton type="button" onClick={() => dispatch(logOutUser())}>
        <LogOutIcon />
        <LogOutText>Exit</LogOutText>
      </LogOutButton>
    </Menu>
  );
};
