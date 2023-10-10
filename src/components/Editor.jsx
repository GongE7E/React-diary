import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './Editor.css';
import { emotions } from '../utils/emotions';
import EmotionItem from './EmotionItem';
import getFormattedDate from '../utils/getFormattedDate';

export default function Editor({ initData, onsubmit }) {
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: '',
  });
  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
    // console.log(initData);
  }, [initData]);

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
        <h4 className='editor-title'>Today's Date</h4>
        <input type='date' value={state.date} onChange={handleChangeDate} />
      </section>
      <section className='editor-emotions'>
        <h4 className='editor-title'>emotion</h4>
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
        <h4 className='editor-title'>diary content</h4>
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
