import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './app.jsx';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Route path='/' component={App}/>
      </div>
    </BrowserRouter>
  );
};

export default Root;
