import React from 'react';
import './item-info.styles.scss';
import ITEM_DATA from './item.data.js';
import PreviewCollection from '../../components/preview-collection/preview-collection.component.jsx';

class ItemInfoPage extends React.Component {
  constructor(props) {
    super();

    this.state  = {
      details: ITEM_DATA
    };
  }

  render() {
    const {details} = this.state;
    return (
      <div className="item-info-page">
        <div className="title">
          <h1> Sales </h1>
          <div className="image">
            <img src="" />
          </div>
        </div>

      {
        details.map(({id, ...otherDetailProps}) => (
          <PreviewCollection key={id} {...otherDetailProps} />
        ))
      }

      </div>
    );

    }
  }


export default ItemInfoPage;
