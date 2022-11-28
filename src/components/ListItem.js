import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/ListItem.css';

const ListItem = ({ item }) => { 
        return (
            <div className="item-container">
                <Link to={`/${item.id}`}>
                    <img className="item-image" src={item.img}></img>
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">{item.price}</span>
                </Link>
            </div>
        );
}

export default ListItem;
