import React from 'react';

import './item-details.styles.scss';

// creating a functional component since no states
const ItemDetails = ({id, name, price, description, otherInfo, imageUrl}) => (
  <div className='collection-item'>
    <div className='image' style={{backgroundImage:`url(${imageUrl})`}} />
      <div className='item-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
          <span className='description'>{price}</span>
          <div className="item-details">
            <h1> Name </h1>
              <span className="name"> {name} </span>
            <h1> Description </h1>
              <span className="description"> {description} </span>
            <h1> Other Info </h1>
              <span className="other-info"> {otherInfo} </span>
          </div>
    </div>
  </div>
);

export default ItemDetails;
