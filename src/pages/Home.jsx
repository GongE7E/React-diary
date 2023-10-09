import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';
import { DiaryStateContext } from '../App';
export default function Home() {
  const [pivotDate, setPivotDate] = useState(new Date());
  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;
  const data = useContext(DiaryStateContext);

  return (
    <>
      <Header
        title={headerTitle}
        leftChild={<Button text={'<'} onClick={onDecreaseMonth} />}
        rightChild={<Button text={'>'} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={data} />
    </>
  );

  function onIncreaseMonth() {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  }
  function onDecreaseMonth() {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  }
}
