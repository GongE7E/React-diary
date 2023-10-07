import React from 'react';
import './Button.css';

export default function Button({ text, onClick, type }) {
  const btnTypes = ['positive', 'negative'].includes(type) ? type : 'default';
  return (
    <button className={['btn', `btn-${btnTypes}`].join(' ')} onClick={onClick}>
      {text}
    </button>
  );
}
