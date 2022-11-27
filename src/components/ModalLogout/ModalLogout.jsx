import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { createPortal } from 'react-dom';
import { logOutUser } from '../../redux/auth/authThunk';
import {
  BackDrop,
  Overlay,
  ModalWindow,
  Title,
  PrimaryButton,
  SecondaryButton,
} from './ModalLogout.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalLogout = ({ onClose }) => {
  const dispatch = useDispatch();
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
        <Title>Do you want to quit the app?</Title>
        <>
          <PrimaryButton onClick={() => dispatch(logOutUser())}>
            YES
          </PrimaryButton>
          <SecondaryButton onClick={onClose}>NO</SecondaryButton>
        </>
      </ModalWindow>
    </Overlay>,

    modalRoot
  );
};
