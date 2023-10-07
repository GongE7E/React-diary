import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
export default function Home() {
  return (
    <div>
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
            text={'positive'}
            onClick={() => alert('positive')}
            type={'positive'}
          />
        }
      />
    </div>
  );
}
