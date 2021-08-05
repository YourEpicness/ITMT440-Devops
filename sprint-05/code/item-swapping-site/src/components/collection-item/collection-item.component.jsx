import React from 'react';
import CustomButton from '../custom-button/custom-button.component.jsx';
import './collection-item.styles.scss';
import { Link } from 'react-router-dom';

// creating a functional component since no states
const CollectionItem = ({id, name, price, imageUrl}) => (
  <div className='collection-item'>
    <div className='image' style={{backgroundImage:`url(${imageUrl})`}} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
    </div>
    <CustomButton inverted> <Link to="/details"> Get More Details</Link> </CustomButton>
  </div>
);

export default CollectionItem;
