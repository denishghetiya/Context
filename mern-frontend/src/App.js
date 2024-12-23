import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import './styles.css'; 

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <h1>MERN + React Context Example</h1>
        <AddItem />
        <ItemList />
      </div>
    </GlobalProvider>
  );
}

export default App;
