import './App.css';
import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Navigation from './components/navigation/navigation.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import ItemInfoPage from './pages/item-info/item-info.component.jsx';
import ItemInfoPageTrade from './pages/item-info/item-info-trade.component.jsx';
import SignInPage from './pages/sign-in/sign-in.component.jsx';
import RegisterPage from './pages/register/register.component.jsx';
import HomePage from './pages/home-page/home-page.component.jsx';
import ItemDetailsPage from './pages/item-details/item-details.component.jsx';
import Profile from './pages/profile/profile.component.jsx';
import axios from "axios";

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // checking if they are signing in
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }
        );
        });
      }

      else(this.setState({currentUser:userAuth}));
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Navigation currentUser={this.state.currentUser} />
        </Switch>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/trade">
            <ItemInfoPageTrade/>
          </Route>
          <Route exact path="/sales">
            <HomePage />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/signin">
            <SignInPage />
          </Route>
          <Route exact path="/home">
            <ItemInfoPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/details">
            <ItemDetailsPage />
          </Route>
        </Switch>
      </div>
    );
  }}

export default App;
