import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js';
import Header from './Header.js';
import Home from './Home.js';
import Login from './Login.js';
import Favorites from './Favorites.js';
import About from './About.js';
import AddResidency from './AddResidency.js';
import EditResidency from './EditResidency.js';
import GMap from './GMap.js';
import ResDetail from './ResDetail.js';

// import './bootstrap-reboot.min.css';
import './App.css';
import './style.css';
import { getUser } from './api.js';

export default class App extends Component {
state = {
    user: null,
    username: ''
}

// Put user into state and in persistence on login via callback
setUser = (userFromLogin) => {
  localStorage.setItem('user', JSON.stringify(userFromLogin));
  this.setState({ user: userFromLogin });
  this.setState({ username: userFromLogin.displayName });
}

// Put user into state from localStorage on refresh
componentDidMount = () => {
  const userFromLocalStorage = getUser();
  this.setState({ user: userFromLocalStorage });
  this.setState({ username: userFromLocalStorage.displayName });
}

  render() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={this.state.user} username={this.state.username} />
        <Switch>
          <PrivateRoute exact path="/favoritesbeta" component={Favorites} user={this.state.user} />
          <PrivateRoute exact path='/add' component={AddResidency} user={this.state.user} />
          <PrivateRoute exact path='/edit/:id' component={EditResidency} user={this.state.user} />
          <Route exact path='/login' render={(props) => <Login {...props} setUser={ this.setUser } user={this.state.user } />} />
          <Route exact path='/favorites' component={Favorites} />
          <Route exact path='/about' component={About} />
          <Route exact path='/map' component={GMap} />
          <Route exact path="/listings/:residencyId" component={ResDetail} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
}