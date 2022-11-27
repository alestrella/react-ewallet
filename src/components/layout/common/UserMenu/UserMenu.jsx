import {
  Menu,
  UserInfo,
  UserAvatar,
  UserName,
  LogOutButton,
  LogOutIcon,
  LogOutText,
} from './UserMenu.styled';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
//import { logOutUser } from '../../../../redux/auth/authThunk';
import authSelectors from '../../../../redux/auth/authSelectors';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';

export const UserMenu = () => {
  //const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Menu>
      <UserInfo>
        <UserAvatar>
          <Avatar
          color={'#4A56E2'}
          name={userName}
          size="30"
          textMarginRatio={0.1}
          textSizeRatio={2}
          round={true}
          maxInitials={2}
        />
        </UserAvatar>
        <UserName>{userName}</UserName>
      </UserInfo>
      <LogOutButton type="button" onClick={() => setIsModalOpen(true)}>
        <LogOutIcon />
        <LogOutText>Exit</LogOutText>
      </LogOutButton>
      {isModalOpen && (
          <ModalLogout onClose={() => setIsModalOpen(false)} />
        )}
    </Menu>
  );
};
