import { OverLay } from 'components/OverLay/OverLay';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modal_root = document.getElementById('modal_root');

export const Modal = ({ closeModal, src, alt }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        closeModal({ src: '', alt: '' });
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);

  const handleOverLay = e => {
    if (e.target === e.currentTarget) {
      closeModal({ src: '', alt: '' });
    }
  };

  return (
    <>
      {createPortal(
        <OverLay onClick={handleOverLay}>
          <img src={src} alt={alt} />
        </OverLay>,
        modal_root
      )}
    </>
  );
};
