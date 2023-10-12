import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useDiary from '../hooks/useDiary';
import getFormattedDate from '../utils/getFormattedDate';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';

export default function Diary() {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useDiary(id);

  if (!data) {
    return <div>Loading...</div>;
  } else {
    const { date, content, emotionId } = data;

    return (
      <>
        <Header
          title={`${getFormattedDate(new Date(Number(date)))}기록`}
          leftChild={
            <Button text={'< 뒤로가기'} onClick={() => navigate(-1)} />
          }
          rightChild={
            <Button
              text={'수정하기 '}
              onClick={() => navigate(`/edit/${id}`)}
            />
          }
        />
        <Viewer emotionId={emotionId} content={content} />
      </>
    );
  }
}
