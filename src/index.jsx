import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

/*  Import all Components here */
// Import common components
import Home from './component/common/home.component.jsx';
import Main from './component/common/main.component.jsx';
import NotFound from './component/common/notfound.component.jsx';
import About from './component/common/about.component.jsx';

//Import Marketing components
//Import business components
    import BusinessHome from './component/marketing/Business/business-home.component.jsx';
    import BusinessContact from './component/marketing/Business/business-contact.component.jsx';
    import BusinessAbout from './component/marketing/Business/business-about.component.jsx';
    import BusinessServices from './component/marketing/Business/business-services.component.jsx';
    import Business from './component/marketing/Business/business-main.component.jsx';

//Import Artist components
    import Artist from './component/marketing/Artist/artist-main.component.jsx';
    import ArtistHome from './component/marketing/Artist/artist-home.component.jsx';
    import ArtistPortfolio from './component/marketing/Artist/artist-portfolio.component.jsx';

/* Routing goes here */
render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="business" component={Business}>
                <IndexRoute component={BusinessHome} />
                <Route path="services" component={BusinessServices} />
                <Route path="about" component={BusinessAbout} />
                <Route path="contact" component={BusinessContact} />
            </Route>
            <Route path="art" component={Artist}>
                <IndexRoute component={ArtistHome} />
                <Route path="portfolio" component={ArtistPortfolio} />
                {/*<Route path="contact" component={ArtistContact} />*/}
            </Route>
            <Route path="about" component={About}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>,
    document.getElementById('root')
);