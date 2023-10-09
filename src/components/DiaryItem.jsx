import React from 'react';

export default function DiaryItem({ item }) {
  const { content } = item;
  return <div>{content}</div>;
}
