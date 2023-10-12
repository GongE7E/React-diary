import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';
import { DiaryStateContext } from '../App';
import getMonthRangeByDate from '../utils/getMonthRangeByDate';

export default function Home() {
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);
  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;
  const data = useContext(DiaryStateContext);
  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (data) => beginTimeStamp <= data.date && data.date <= endTimeStamp
        )
      );
      // console.log(beginTimeStamp);
      // console.log(data.date);
      // console.log(endTimeStamp);
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate]);

  return (
    <>
      <Header
        title={headerTitle}
        leftChild={<Button text={'<'} onClick={onDecreaseMonth} />}
        rightChild={<Button text={'>'} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />
    </>
  );

  function onIncreaseMonth() {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  }
  function onDecreaseMonth() {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  }
}
