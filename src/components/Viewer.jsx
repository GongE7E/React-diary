import React from 'react';
import './Viewer.css';
import { emotions } from '../utils/emotions';

export default function Viewer({ content, emotionId }) {
  //   console.log(emotions);
  const emotionItem = emotions.find((element) => element.id === emotionId);
  return (
    <div className='ly_viewer'>
      <section>
        <h4 className='title'>오늘의 감정</h4>
        <div
          className={[
            'emotion_img_wrapper',
            `emotion_img_wrapper_${emotionId}`,
          ].join(' ')}
        >
          <img src={emotionItem.img} alt={emotionItem.name} />
          <div className='emotion_descript'>{emotionItem.name}</div>
        </div>
      </section>
      <section>
        <h4 className='title'>오늘의 일기</h4>
        <div className='content_wrapper'>
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
}
