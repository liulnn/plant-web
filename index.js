import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import App from './modules/App'
import Home from './modules/Home'
import About from './modules/About'
import Login from './modules/Login'
import Profile from './modules/Profile'
import PlantList from './modules/PlantList'
import Settings from './modules/Settings'

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            {/* add it here, as a child of `/` */}
            <IndexRoute component={Home}/>

            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/plants" component={PlantList}/>
            <Route path="/settings" component={Settings}/>
        </Route>
    </Router>
), document.getElementById('app'));