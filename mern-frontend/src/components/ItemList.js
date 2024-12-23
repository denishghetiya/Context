import React from 'react';
import { useGlobalContext } from '../context/GlobalState';
import './ItemList.css';

const ItemList = () => {
  const { items, loading, error } = useGlobalContext();

  if (loading) return <h2 className="loading">Loading...</h2>;
  if (error) return <h2 className="error">Error: {error}</h2>;

  return (
    <div className="item-list">
      <h3>Item List</h3>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
