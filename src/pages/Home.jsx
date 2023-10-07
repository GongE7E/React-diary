import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
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
      <Editor onsubmit={() => alert('well done')} />
    </>
  );
}
