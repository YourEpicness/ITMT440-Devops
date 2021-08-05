import React from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.component.jsx';
import Directory from '../../components/directory/directory.component';
import ItemInfoPage from '../item-info/item-info.component.jsx';
import './home-page.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <ItemInfoPage />
  </div>
);

export default HomePage;
