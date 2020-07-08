import React, { Component } from 'react';
import './ItemsList.css';

function ItemsList(props) {
  return (
    <div>
      {props.items.map((item) => (
        <div className="list" key={item.key}>
          {item.text}
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
