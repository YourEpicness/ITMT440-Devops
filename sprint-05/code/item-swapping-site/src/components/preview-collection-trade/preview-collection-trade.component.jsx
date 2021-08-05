import React from "react";

import "./preview-collection-trade.styles.scss";
import CollectionItem from '../collection-item/collection-item.component.jsx';

const PreviewCollectionTrade = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title"> {title.toUpperCase()} </h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx > 4)
        .map(({id, ...otherItemProps}) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollectionTrade;
