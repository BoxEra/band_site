import React from 'react';
import { withRouter } from 'react-router';
import { Element } from 'react-scroll';
import classnames from 'classnames';

import './header.scss';


const Header = withRouter(({
  history,
}) => {

  const isActiveRoute = (route) => {
    return (window.location.pathname === route);
  };

  const updateActiveRoute = (route) => {
    if (!isActiveRoute(route)) {
      history.replace(route);
    }
  };

  return (
    <Element name="myScrollToHeader">
      <div className={'headerWrapper'}>
        <div
          className={classnames('headerLink', isActiveRoute('/') && 'headerLinkActive')}
          onClick={() => updateActiveRoute('/')}
        >
          {'HOME'}
        </div>
        <div
          className={classnames('headerLink', isActiveRoute('/about-us') && 'headerLinkActive')}
          onClick={() => updateActiveRoute('/about-us')}
        >
          {'ABOUT US'}
        </div>
        <div
          className={classnames('headerLink', isActiveRoute('/photos') && 'headerLinkActive')}
          onClick={() => updateActiveRoute('/photos')}
        >
          {'PHOTOS'}
        </div>
        <div className={'centerLogo'}><img src={'https://s3.amazonaws.com/boxera/box_era_logo.png'}></img></div>
        <div
          className={classnames('headerLink', isActiveRoute('/gigs') && 'headerLinkActive')}
          onClick={() => updateActiveRoute('/gigs')}
        >
          {'GIGS'}
        </div>
        <div
          className={classnames('headerLink', isActiveRoute('/contact') && 'headerLinkActive')}
          onClick={() => updateActiveRoute('/contact')}
        >
          {'CONTACT'}
        </div>
        <a href={'https://squareup.com/store/box-era'} target={"_blank"}>
        <div
          className={classnames('headerLink', isActiveRoute('/contact') && 'headerLinkActive')}
        >
          {'MERCH'}
        </div>
        </a>
      </div>
    </Element>
  );
});

export default Header;
