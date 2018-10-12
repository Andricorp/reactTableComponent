import React, { Component } from 'react';
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'


import { Router, Route, Link, Switch } from 'react-router-dom';
import Details from './pages/Details';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
// import { register } from './serviceWorker';
import requireAuth from './components/hoc/require_auth';
import noRequireAuth from './components/hoc/no_require_auth';



export default () =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={noRequireAuth(Login)} />
        <Route path='/register' component={noRequireAuth(Register)} />
        <Route path='/logout' component={requireAuth(Logout)} />
        <Route path="/details/:id" component={requireAuth(Details)} />
        {/* <Route path="/profie" component={requireAuth(Profile)} /> */}

    </Switch>

