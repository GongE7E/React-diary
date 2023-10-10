import React from 'react';
import { useParams } from 'react-router-dom';
import useDiary from '../hooks/useDiary';

export default function Diary() {
  const { id } = useParams();
  const data = useDiary(id);
  if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h3>{id}</h3>
      </div>
    );
  }
}
