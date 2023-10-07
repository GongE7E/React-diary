import React from 'react';

export default function EmotionItem({ onClick, emotion, isSelected }) {
  const { id, img, name } = emotion;
  return (
    <li
      onClick={() => onClick(id)}
      className={[
        'EmotionItem',
        isSelected ? `EmotionItem-on-${id}` : `EmotionItem-off`,
      ].join(' ')}
    >
      <img src={img} alt={name} />
      <span className='emotion-name'>{name}</span>
    </li>
  );
}
