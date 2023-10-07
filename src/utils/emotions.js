import { getEmotionImgById } from './emotionFunction';

export const emotions = [
  {
    id: 1,
    name: '행복함',
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: '평온함',
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: '그저그래',
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: '짜증나',
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: '최악이야',
    img: getEmotionImgById(5),
  },
];
