import React from 'react';
import './Viewer.css';
import { emotions } from '../utils/emotions';

export default function Viewer({ content, emotionId }) {
  //   console.log(emotions);
  const emotionItem = emotions.find((element) => element.id === emotionId);
  return (
    <div>
      <section>
        <h4>오늘의 감정</h4>
        <div>
          <img src={emotionItem.img} alt={emotionItem.name} />
        </div>
        <div>{emotionItem.name}</div>
      </section>
      <section>
        <h4>오늘의 일기</h4>
        <div>
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
}
