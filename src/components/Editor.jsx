import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { emotions } from '../utils/emotions';
import EmotionItem from './EmotionItem';

export default function Editor({ onsubmit }) {
  const [state, setState] = useState({
    date: '',
    emotionId: 3,
    content: '',
  });
  const handleChangeDate = (e) => {
    setState({ ...state, date: e.target.value });
  };
  const handleChangeContent = (e) => {
    setState({ ...state, content: e.target.value });
  };
  const handleSubmit = () => {
    onsubmit(state);
  };
  const handleChangeEmotion = (emotionId) => {
    setState({ ...state, emotionId });
  };
  const navigate = useNavigate();
  return (
    <div className='Editor'>
      <section className='editor-date'>
        <h4>Today's Date</h4>
        <div>
          <input type='date' value={state.date} onChange={handleChangeDate} />
        </div>
      </section>
      <section className='editor-emotions'>
        <h4>emotion</h4>
        <ul className='emotions-emotion-list'>
          {emotions.map((emotion) => (
            <EmotionItem
              key={emotion.id}
              onClick={handleChangeEmotion}
              emotion={emotion}
              isSelected={state.emotionId === emotion.id}
            />
          ))}
        </ul>
      </section>
      <section className='editor-content'>
        <h4>diary content</h4>
        <textarea
          placeholder='당신의 오늘 하루는 어땠나요? '
          value={state.content}
          onChange={handleChangeContent}
        />
      </section>
      <section className='editor-bottom'>
        <div className='editor-bottom-btn'>
          <Button text={'취소하기'} onClick={() => navigate(-1)} />
          <Button text={'작성완료'} type={'positive'} onClick={handleSubmit} />
        </div>
      </section>
    </div>
  );
}
