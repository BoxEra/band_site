import React from 'react';
import { withRouter } from 'react-router';

import './header.scss';


const Header = withRouter(({
  history,
}) => {

  const updateActiveRoute = (route) => {
    if (window.location.pathname !== route) {
      history.replace(route);
    }
  };

  return (
    <div className={'headerWrapper'}>
      <div className={'headerLink'} onClick={() => updateActiveRoute('/')}>
        {'HOME'}
      </div>
      <div className={'headerLink'} onClick={() => updateActiveRoute('/about-us')}>
        {'ABOUT US'}
      </div>
      <img src={'../../images/box_era_logo.png'} onClick={() => updateActiveRoute('/')}/>
      <div className={'headerLink'} onClick={() => updateActiveRoute('/gigs')}>
        {'GIGS'}
      </div>
      <div className={'headerLink'} onClick={() => updateActiveRoute('/contact')}>
        {'CONTACT'}
      </div>
    </div>
  );
});

export default Header;
