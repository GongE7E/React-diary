import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../components/Editor';
import Header from '../components/Header';
import Button from '../components/Button';
import { DiaryDispatchContext } from '../App';

export default function New() {
  const navigate = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);

  const handleSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    navigate('/', { replace: true });
  };
  return (
    <>
      <Header
        title={'새 일기 쓰기 '}
        leftChild={<Button text={'< 뒤로가기'} onClick={() => navigate(-1)} />}
      />
      <Editor onsubmit={handleSubmit} />
    </>
  );
}
