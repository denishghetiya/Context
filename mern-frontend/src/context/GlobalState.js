import React, { createContext, useReducer, useContext, useEffect } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const initialState = {
  items: [],
  loading: true,
  error: null,
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...state, items: action.payload, loading: false };
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then((response) => {
        dispatch({ type: 'SET_ITEMS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'ERROR', payload: error.message });
      });
  }, []);

  const addItem = (itemName) => {
    axios.post('http://localhost:5000/api/items', { name: itemName })
      .then((response) => {
        dispatch({ type: 'ADD_ITEM', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'ERROR', payload: error.message });
      });
  };

  return (
    <GlobalContext.Provider value={{ ...state, addItem }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
