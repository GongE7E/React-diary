import React from 'react';

export default function Button({ text, onClick, type }) {
  const btnTypes = ['positive', 'negative'].includes(type) ? type : 'default';
  return (
    <button className={['btn', `btn-${btnTypes}`].join(' ')} onClick={onClick}>
      {text}
    </button>
  );
}
