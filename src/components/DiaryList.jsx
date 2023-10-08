import React from 'react';
import Button from './Button';
import './DiaryList.css';

export default function DiaryList() {
  return (
    <div className='diaryList'>
      <div className='menu_wrapper'>
        <div className='left_col'>
          <select></select>
        </div>
        <div className='right_col'>
          <Button type={'positive'} text={'새 일기쓰기'} />
        </div>
      </div>
    </div>
  );
}
