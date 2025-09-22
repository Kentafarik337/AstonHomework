import React from 'react';
import { Header } from '../../widgets/LayoutHeader/Header';
import { Footer } from '../../widgets/LayoutFooter/Footer';
import './MainLayout.css'

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};