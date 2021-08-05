import React from 'react';

import './navigation.styles.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/iss.svg';

import {auth} from '../../firebase/firebase.utils';

const Navigation = ({currentUser}) => (
  <div className='navigation'>
  <nav className="stroke">
    <ul>
      <Link className='option' to='/'> <Logo/> </Link>
      <li><Link className='option' to='/sales'> SALES </Link></li>
      <li><Link className='option' to='/trade'> TRADE </Link></li>
      <li><Link className='option' to='/profile'> PROFILE </Link></li>
      <li>{
          currentUser ?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT  </div>
          :
          <Link className='option' to='/signin'> SIGN IN</Link>
        }</li>
      <li><Link className='option' to='/register'> REGISTER </Link></li>
      {
          currentUser ?
          <li className='option'> Welcome, {currentUser.displayName}  </li>
          :
          ''
        }
    </ul>
  </nav>

  </div>
);

export default Navigation;
