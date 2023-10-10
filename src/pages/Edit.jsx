import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useDiary from '../hooks/useDiary';
import Header from '../components/Header';
import Button from '../components/Button';
import { DiaryDispatchContext } from '../App';
import Editor from '../components/Editor';

export default function Edit() {
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const handleClickDelete = (targetId) => {
    if (window.confirm('일기를 삭제할까요?')) {
      onDelete(id);
      navigate('/', { replace: true });
    }
  };
  const handleUpdate = (data) => {
    if (window.confirm('일기를 수정할까요?')) {
      const { id, date, content, emotionId } = data;
      onUpdate(id, date, content, emotionId);
      navigate('/', { replace: true });
    }
  };
  if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Header
          title={'일기 수정하기'}
          leftChild={
            <Button text={'< 뒤로가기'} onClick={() => navigate(-1)} />
          }
          rightChild={
            <Button
              text={'삭제하기 '}
              type={'negative'}
              onClick={handleClickDelete}
            />
          }
        />
        <Editor initData={data} onsubmit={handleUpdate} />
      </div>
    );
  }
}
