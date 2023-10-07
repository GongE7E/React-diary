import React from 'react';
import Button from '../components/Button';

export default function Home() {
  return (
    <div>
      Home
      <Button
        text={'negative'}
        onClick={() => alert('negative')}
        type={'negative'}
      />
      <Button
        text={'positive'}
        onClick={() => alert('positive')}
        type={'positive'}
      />
      <Button text={'default'} onClick={() => alert('default')} />
    </div>
  );
}
