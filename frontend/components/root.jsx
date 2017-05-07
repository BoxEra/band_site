import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Header from './header.jsx';
import Tour from './tour.jsx';
import Music from './music.jsx';
import Photos from './photos.jsx';
import Contact from './contact.jsx';

const Root = () => {
  const history = createHistory();

  return(
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <Route path='/' component={Header}>
        <Route path='tour' component={Tour}/>
        <Route path='music' component={Music}/>
        <Route path='photos' component={Photos}/>
        <Route path='contact' component={Contact}/>
      </Route>
    </Router>
  );
};

export default Root;
