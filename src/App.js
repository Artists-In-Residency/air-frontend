import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js';
import Header from './Header.js';
import Home from './Home.js';
import Login from './Login.js';
import Favorites from './Favorites.js';
import FavoritesBeta from './FavoritesBeta.js';
import About from './About.js';
import Tips from './Tips.js';
import AddResidency from './AddResidency.js';
import EditResidency from './EditResidency.js';
import ResidencyTable from './ResidencyTable.js';
import UserTable from './UserTable.js';
import GMap from './GMap.js';
import ResDetailItem from './ResDetailItem.js';

import './bootstrap-reboot.min.css';
import './App.css';
import './style.css';
import { getUserLogin } from './api.js';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log('poop', this.props);
  // }
state = {
    user: [],
    username: ''
}

// Put user into state and in persistence on login via callback
setUser = (userFromLogin) => {
  localStorage.setItem('user', JSON.stringify(userFromLogin));
  this.setState({ user: userFromLogin });
}

// Put user into state from localStorage on refresh
componentDidMount = () => {
  const userFromLocalStorage = getUserLogin();
  if (userFromLocalStorage) {
    this.setState({ user: userFromLocalStorage });
  }
}

  render() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={this.state.user} />
        <Switch>
          <Route exact path="/bookmarks" render={(props) => <FavoritesBeta {...props} user={this.state.user} />} />
          <PrivateRoute exact path='/add' component={AddResidency} user={this.state.user} />
          <PrivateRoute exact path='/edit/:id' component={EditResidency} user={this.state.user} />
          <Route exact path='/login' render={(props) => <Login {...props} setUser={ this.setUser } user={this.state.user } />} />
          {/* <Route exact path='/bookmarks' component={Favorites} /> */}
          <Route exact path='/about' component={About} />
          <Route exact path='/tips' component={Tips} />
          <Route exact path='/map' component={GMap} />
          <Route exact path="/listings/:residencyId" render={(props) => <ResDetailItem {...props} user={this.state.user} />} />
          <Route exact path="/admin/listings" component={ResidencyTable} />
          <Route exact path="/admin/users" component={UserTable} />
          <Route path='/' render={() => <Home user={this.state.user} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
}