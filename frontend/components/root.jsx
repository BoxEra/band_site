import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header.jsx';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Route path='/' component={Header}/>
      </div>
    </BrowserRouter>
  );
};

export default Root;
