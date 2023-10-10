import React, { useEffect, useState } from 'react';
import Button from './Button';
import './DiaryList.css';
import { useNavigate } from 'react-router-dom';
import DiaryItem from './DiaryItem';
const sortOptionList = [
  {
    value: 'latest',
    name: '최신순',
  },
  { value: 'oldest', name: '오래된순' },
];

export default function DiaryList({ data }) {
  const [sortType, setSortType] = useState('latest');
  const [sortedData, setSortedData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === 'latest') {
        return Number(a.date) - Number(b.date);
      } else {
        return Number(b.date) - Number(a.date);
      }
    };
    const list = JSON.parse(JSON.stringify(data));
    list.sort(compare);
    setSortedData(list);
  }, [sortType, data]);

  return (
    <div className='diaryList'>
      <div className='menu_wrapper'>
        <div className='left_col'>
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            {sortOptionList.map((option) => (
              <option key={option.value}>{option.name}</option>
            ))}
          </select>
        </div>
        <div className='right_col'>
          <Button
            type={'positive'}
            text={'새 일기쓰기'}
            onClick={() => navigate('/new')}
          />
        </div>
      </div>
      <div className='list_wrapper'>
        {sortedData.map((item) => (
          <DiaryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
