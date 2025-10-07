import React, { useState } from 'react';
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import { ProjectInfoModal } from '../../shared/ui/Modal/Modal';
import { ButtonTheme } from '../../shared/ui/Button/Button';
import './Header.css';

export const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="header-title">
              <h1 className="title">Aston REACT Homework 1</h1>
              <p className="subtitle">Модальное окно и темы</p>
            </div>
            
            <div className="header-actions">
              <ButtonTheme 
                variant="secondary"
                onClick={() => setIsModalOpen(true)}
              >
                ℹ️
              </ButtonTheme>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </header>

      <ProjectInfoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};