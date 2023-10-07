import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
export default function Home() {
  return (
    <>
      <Header
        title={'Home'}
        leftChild={
          <Button
            text={'negative'}
            onClick={() => alert('negative')}
            type={'negative'}
          />
        }
        rightChild={
          <Button
            text={'default'}
            onClick={() => alert('default')}
            type={'default'}
          />
        }
      />
    </>
  );
}
