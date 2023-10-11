import React, { memo } from 'react';
import './EmotionItem.css';

const emotionItem = memo(function EmotionItem({
  onClick,
  emotion,
  isSelected,
}) {
  const { id, img, name } = emotion;
  return (
    <li
      onClick={() => onClick(id)}
      className={[
        'EmotionItem',
        isSelected ? `is-EmotionItem-on-${id}` : `is-EmotionItem-off`,
      ].join(' ')}
    >
      <img src={img} alt={name} />
      <span className='emotion-name'>{name}</span>
    </li>
  );
});
export default emotionItem;
