import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import './App.css';

import { Outlet } from 'react-router-dom';
import React from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'init': {
      return action.data;
    }
    case 'create': {
      const newState = [action.data, ...state];
      localStorage.setItem('diary', JSON.stringify(newState));

      return newState;
    }
    case 'update': {
      const newState = state.map((list) =>
        String(list.id) === String(action.data.id) ? { ...action.data } : list
      );
      localStorage.setItem('diary', JSON.stringify(newState));
      return newState;
    }
    case 'delete': {
      const newState = state.filter(
        (list) => String(list.id) !== String(action.data.id)
      );
      localStorage.setItem('diary', JSON.stringify(newState));
      return newState;
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

  const onCreate = (id, date, content, emotionId) => {
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
    const rawData = localStorage.getItem('diary');

    if (!rawData) {
      setIsDataLoaded(true);
      return;
    }
    const localData = JSON.parse(rawData);
    if (localData.length === 0) {
      setIsDataLoaded(true);
      return;
    }
    localData.sort((a, b) => Number(b.id) - Number(a.id));
    idRef.current = localData[0].id + 1;
    dispatch({ type: 'init', data: localData });
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
