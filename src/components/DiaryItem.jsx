import React from 'react';
import './DiaryItem.css';
import { getEmotionImgById } from '../utils/emotionFunction';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function DiaryItem({ item }) {
  const { content, emotionId, date, id } = item;
  const navigate = useNavigate();
  return (
    <div className='diaryItem'>
      <div
        className={['img_section', `img_section_${emotionId}`].join(' ')}
        onClick={() => navigate(`/diary/${id}`)}
      >
        <img src={getEmotionImgById(emotionId)} alt={emotionId} />
      </div>
      <div className='info_section'>
        <div className='data_wrapper'>
          {new Date(parseInt(date)).toLocaleDateString()}
        </div>
        <div
          className='content_wrapper'
          onClick={() => navigate(`/diary/${id}`)}
        >
          {content}
        </div>
      </div>
      <div className='button_section'>
        <Button text={'수정하기'} onClick={() => navigate(`/edit/${id}`)} />
      </div>
    </div>
  );
}
