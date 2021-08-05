import React from 'react';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      password: "",
      karma: "",
    };
  }

    render() {

      return(

      <div className='profile'>
        <h1> Profile Page </h1>
        <p> Current Name:  </p>
        <p> Current Password: </p>
        <p> Karma Points: </p>
        <p> Posts: </p>
      </div>
    )
    }
  };

export default Profile;
