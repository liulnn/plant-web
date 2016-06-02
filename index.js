import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import App from './modules/App'
import Share from './modules/components/Share'
import Public from './modules/components/Public'
import About from './modules/components/About'
import Login from './modules/components/Login'
import Profile from './modules/components/Profile'
import Gallery from './modules/components/Gallery'
import Settings from './modules/components/Settings'

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            {/* add it here, as a child of `/` */}
            <IndexRoute component={Public}/>

            <Route path="/about" component={About}/>
            <Route path="/public" component={Public}/>
            <Route path="/login" component={Login}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/share" component={Share}/>
        </Route>
    </Router>
), document.getElementById('app'));