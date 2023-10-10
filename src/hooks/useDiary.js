import { useContext, useEffect, useState } from 'react';
import { DiaryStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

export default function useDiary(id) {
  const data = useContext(DiaryStateContext);
  const [diary, setDiary] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const matchDiary = data.find((element) => element.id === id);
    if (matchDiary) {
      setDiary(matchDiary);
    } else {
      alert('찾는 일기가 없습니다 😭');
      navigate('/', { replace: true });
    }
  }, [id, data]);
  return diary;
}
