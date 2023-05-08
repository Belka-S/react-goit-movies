import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      e.key === 'Escape' && onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => e.target === e.currentTarget && onClose();

  return createPortal(
    <div className={css.Backdrop} onClick={handleBackdropClick}>
      <div>{children}</div>
    </div>,
    modalRoot
  );
}
