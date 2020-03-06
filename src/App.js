import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js';
import Header from './Header.js';
import Home from './Home.js';
import Login from './Login.js';
import Bookmarks from './Bookmarks.js';
import About from './About.js';
import Tips from './Tips.js';
import AddResidency from './AddResidency.js';
import EditResidency from './EditResidency.js';
import MyResidencies from './MyResidencies.js';
import ResidencyTable from './ResidencyTable.js';
import UserTable from './UserTable.js';
import GMap from './GMap.js';
import ResDetailItem from './ResDetailItem.js';
import Search from './Search.js';
import { getUserFromLocalStorage } from './api.js';

import './bootstrap-reboot.min.css';
import './App.css';
import './style.css';

export default class App extends Component {

state = {
    user: [],
    username: ''
}

// Put user into state and in persistence on login via callback
setUser = (userFromLogin) => {
  localStorage.setItem('user', JSON.stringify(userFromLogin));
  this.setState({ user: userFromLogin });
}


// Put user into state from localStorage first for subsequent props passing
componentWillMount = () => {
  const userFromLocalStorage = getUserFromLocalStorage();
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
          <PrivateRoute exact path='/bookmarks' component={Bookmarks} user={this.state.user}/>
          <PrivateRoute exact path='/add' component={AddResidency} user={this.state.user} />
          <PrivateRoute exact path='/edit/:id' component={EditResidency} user={this.state.user} />
          <Route exact path='/search' component={Search} user={this.state.user}/>
          <PrivateRoute exact path='/my/listings/' component={MyResidencies} user={this.state.user} />
          <Route exact path='/login' render={(props) => <Login {...props} setUser={ this.setUser } user={this.state.user } />} />
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