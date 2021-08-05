import React from 'react';
import './item-info.styles.scss';
import ITEM_DATA from './item.data.js';
import PreviewCollectionTrade from '../../components/preview-collection-trade/preview-collection-trade.component.jsx';

class ItemInfoPageTrade extends React.Component {
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
          <h1> Trade </h1>
          <div className="image">
            <img src="" />
          </div>
        </div>

      {
        details.map(({id, ...otherDetailProps}) => (
          <PreviewCollectionTrade key={id} {...otherDetailProps} />
        ))
      }

      </div>
    );

    }
  }


export default ItemInfoPageTrade;
