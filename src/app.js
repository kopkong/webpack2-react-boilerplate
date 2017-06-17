/**
 * Created by colin on 2017/6/13.
 */

import 'assets/styles/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import NavContainer from 'containers/nav';
import HomeContainer from 'containers/home';
import AboutContainer from 'containers/about';
import DashboardContainer from 'containers/dashboard';
import NoMatchContainer from 'containers/nomatch';

import { appReducers } from './reducer/index';


// Store
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(appReducers);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/redirect">Click to redirect</Link></li>
                    <li><Link to="/nowhere">No Route is matched</Link></li>
                </ul>
                <NavContainer/>
                <Switch>
                    <Route path="/" exact component={HomeContainer}/>
                    <Redirect from="redirect" to="dashboard"/>
                    <Route path="/dashboard" component={DashboardContainer}/>
                    <Route path="/about" component={AboutContainer}/>
                    <Route component={NoMatchContainer}/>
                </Switch>
            </div>
        </HashRouter>
    </Provider>
,
    document.getElementById('app')
);

