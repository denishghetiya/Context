import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalState';
import './AddItem.css';

const AddItem = () => {
  const [name, setName] = useState('');
  const { addItem } = useGlobalContext();

  const onSubmit = (e) => {
    e.preventDefault();
    addItem(name);
    setName('');
  };

  return (
    <div className="add-item">
      <h3>Add Item</h3>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter item name"
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
