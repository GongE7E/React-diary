import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import { getEmotionImgById } from './utils/emotionFunction';
import { Outlet } from 'react-router-dom';
import React from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'init': {
      return action.data;
    }
    case 'create': {
      return [action.data, ...state];
    }
    case 'update': {
      return state.map((list) =>
        list.id === action.data.id ? { ...action.data } : list
      );
    }
    case 'delete': {
      return state.filter((list) => list.id !== action.data.id);
    }

    default: {
      return state;
    }
  }
}
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const idRef = useRef(0);
  const [data, dispatch] = useReducer(reducer, []);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const MockData = [
    {
      id: 'mock1',
      date: new Date().getTime(),
      content: 'mock1',
      emotionId: 1,
    },
    {
      id: 'mock2',
      date: new Date().getTime(),
      content: 'mock2',
      emotionId: 2,
    },
    {
      id: 'mock3',
      date: new Date().getTime(),
      content: 'mock3',
      emotionId: 3,
    },
    {
      id: 'mock4',
      date: new Date().getTime(),
      content: 'mock4',
      emotionId: 4,
    },
  ];

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: 'create',
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };
  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: 'update',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };
  const onDelete = (targetId) => {
    dispatch({
      type: 'delete',
      data: {
        id: targetId,
      },
    });
  };
  useEffect(() => {
    dispatch({
      type: 'init',
      data: MockData,
    });
    setIsDataLoaded(true);
  }, []);

  if (!isDataLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
          <div className='App'>
            <Outlet />
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;
