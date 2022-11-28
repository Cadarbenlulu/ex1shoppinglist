import React, {useState} from 'react';
import '../style/Home.css';
import ListItem from './ListItem.js';
import items from '../items.js'

function Home() {
  return (
    
    <div className="app-base">
      <div className="items-list">
        {items.map((item) => {
         return <ListItem key={item.id} item={item}></ListItem>
        })}
      </div>
    </div>
  );
}

export default Home;
