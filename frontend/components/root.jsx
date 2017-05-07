import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Header from './header.jsx';

const Root = () => {
  return(
    <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
      <Route path='/' component={Header}>

      </Route>
    </Router>
  );
};

export default Root;
