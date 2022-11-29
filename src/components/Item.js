import React from 'react';
import { Component } from 'react';
import '../style/Item.css';
import items from '../items.js'

const Item = ({item}) => { 
    const id = window.location.pathname.split("/")[1];
        return (
        <div className="app-base">
            <div className="items-list">
              {items.map((item) => {
                if (item.id == id) {
                    return (
                    <div className="item-container">
                     <img className="item-image" src={item.img}></img>
                     <span className="item-text">{item.name}</span>
                     <span className="item-text">{item.description}</span>
                     <span className="item-text">{item.price}</span>
                     <span className="item-text">{item.shop}</span>
                     <img className="item-sec-image" src={item.secondaryImg}></img>   
                    </div>)}
                })}
            </div>
        </div>
            
        );
}

export default Item;