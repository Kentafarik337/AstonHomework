import React from 'react';
import { useEffect, type ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

interface ModalSubComponentProps {
  children: ReactNode;
}

const ModalHeader: React.FC<ModalSubComponentProps> = ({ children }) => (
  <div className="modal-header">
    <h2 className="modal-title">{children}</h2>
  </div>
);

const ModalBody: React.FC<ModalSubComponentProps> = ({ children }) => (
  <div className="modal-body">{children}</div>
);

const ModalFooter: React.FC<ModalSubComponentProps> = ({ children }) => (
  <div className="modal-footer">{children}</div>
);

export const Modal: React.FC<ModalProps> & {
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
} = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
  <div className="modal-overlay">
    <div className="modal-content">
      <button className="modal-close" onClick={onClose}>
        ×
      </button>
      {children}
    </div>
  </div>,
  document.body
);
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export const ProjectInfo: React.FC = () => (
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
          'Кнопки с обработкой событий → src/shared/ui/Button/',
        ].map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  </>
);

interface ProjectInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectInfoModal: React.FC<ProjectInfoModalProps> = ({
  isOpen,
  onClose,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <Modal.Header>О проекте</Modal.Header>
    <Modal.Body>
      <ProjectInfo />
    </Modal.Body>
    <Modal.Footer>
      <button className="modal-button">
        Просто кнопка в футоре
      </button>
    </Modal.Footer>
  </Modal>
);
