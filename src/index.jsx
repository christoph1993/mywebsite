import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

/*  Import all Components here */
// Import common components
import Home from './component/common/home.component.jsx';
import Main from './component/common/main.component.jsx';
import NotFound from './component/common/notfound.component.jsx';
import About from './component/common/about.component.jsx';

import Marketing from './component/marketing/marketing.component.jsx';

/* Routing goes here */
render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="market" component={Marketing}/>
            <Route path="about" component={About}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>,
    document.getElementById('root')
);