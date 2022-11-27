import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { createPortal } from 'react-dom';
import { logOutUser } from '../../redux/auth/authThunk';
import { Overlay, ModalWindow, Title } from './ModalLogout.styled';
import { Button } from 'antd';

const modalRoot = document.getElementById('modal-root');

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
            <button onClick={onClose} >NO</button>
             | 
            <button onClick={() => dispatch(logOutUser())}>YES</button>
        </>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
