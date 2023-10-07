import React from 'react';
import './Header.css';

export default function Header({ title, leftChild, rightChild }) {
  return (
    <header>
      <div className='header-left'>{leftChild}</div>
      <div className='header-title'>{title}</div>
      <div className='header-right'>{rightChild}</div>
    </header>
  );
}
