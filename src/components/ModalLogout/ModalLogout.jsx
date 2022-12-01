import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { createPortal } from 'react-dom';
import { logOutUser } from '../../redux/auth/authThunk';
import {
  Overlay,
  ModalWindow,
  Title,
  PrimaryButton,
  SecondaryButton,
} from './ModalLogout.styled';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';

const modalRoot = document.querySelector('#modal-root');

export const ModalLogout = ({ onClose }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <Title>{t('LogOut.LogOutTitle')}</Title>
        <>
          <PrimaryButton onClick={() => dispatch(logOutUser())}>
            {t('LogOut.ButtonYES')}
          </PrimaryButton>
          <SecondaryButton onClick={onClose}>
            {t('LogOut.ButtonNo')}
          </SecondaryButton>
        </>
      </ModalWindow>
    </Overlay>,

    modalRoot
  );
};
