import React from 'react';

class ItemDetailsPage extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

    render() {

      return(
      <div className='profile'>
        <h1> Item Details Page </h1>
        <p> Name:  </p>
        <p> Price: </p>
        <p> Description: </p>
        <p> Location: </p>
        <p> More Info: </p>
      </div>
    )
    }
  };

export default ItemDetailsPage;
