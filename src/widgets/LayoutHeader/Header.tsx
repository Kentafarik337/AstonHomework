import React from 'react';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">Aston REACT Homework 1</h1>
        <p className="subtitle">сабтайтл для header</p>
      </div>
    </header>
  );
};