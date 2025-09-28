import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          {title && <h2 className="modal-title">{title}</h2>}
          <button 
            onClick={onClose}
            className="modal-close"
          >
            X
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};
export const ProjectInfo: React.FC = () => {
  return (
    <>
      <div className="info-section">
        <h3>Aston React Homework</h3>
        <p>Домашнее задание 2</p>
      </div>

      <div className="info-section">
        <h3>Задание:</h3>
        <ul>
          {[
            '1. Реализовать ThemeContext и переключение темы',
            'Использовать React.Fragment и key в списках.', 
            'Модалка "О проекте" через React.Portal → src/shared/ui/Modal/',
            'Кнопки с обработкой событий → src/shared/ui/Button/'
          ].map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

interface ProjectInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectInfoModal: React.FC<ProjectInfoModalProps> = ({ 
  isOpen, 
  onClose 
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="О проекте">
      <ProjectInfo />
    </Modal>
  );
};