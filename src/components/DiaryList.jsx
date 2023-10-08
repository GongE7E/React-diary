import React, { useState } from 'react';
import Button from './Button';
import './DiaryList.css';

const sortOptionList = [
  {
    value: 'latest',
    name: '최신순',
  },
  { value: 'oldest', name: '오래된순' },
];

export default function DiaryList() {
  const [sortType, setSortType] = useState('latest');

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
          <Button type={'positive'} text={'새 일기쓰기'} />
        </div>
      </div>
    </div>
  );
}
