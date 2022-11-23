import {
  Menu,
  UserName,
  LogOutButton,
  LogOutIcon,
  LogOutText,
} from './UserMenu.styled';
import Avatar, { ConfigProvider } from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../../../redux/auth/authThunk';
import authSelectors from '../../../../redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);

  return (
    <Menu>
      <UserName>
        <ConfigProvider colors={['red', 'green', 'blue']}>
          <Avatar name={userName} size="40" round={true} />
        </ConfigProvider>
      </UserName>
      <LogOutButton type="button" onClick={() => dispatch(logOutUser())}>
        <LogOutIcon />
        <LogOutText>Exit</LogOutText>
      </LogOutButton>
    </Menu>
  );
};
