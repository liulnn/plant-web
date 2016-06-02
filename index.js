import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import App from './modules/App'
import Home from './modules/components/Home'
import About from './modules/components/About'
import Login from './modules/components/Login'
import Profile from './modules/components/Profile'
import Gallery from './modules/components/Gallery'
import Settings from './modules/components/Settings'
import AddMoment from './modules/components/AddMoment'

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
            <Route path="/gallery" component={Gallery}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/moments/add" component={AddMoment}/>
        </Route>
    </Router>
), document.getElementById('app'));