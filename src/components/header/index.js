import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../menu';
import AuthHeaderLink from './AuthHeaderLink';
import { imageUrlRecources } from '../../resources/url';
import { titleList } from '../../resources/global';

const Header = () => (
  <header className="header">
    <div className="authBlock">
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-sm-10 col-12">
            <AuthHeaderLink />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-2 d-none d-sm-block d-md-none d-lg-block header__logo">
          <NavLink to="/" exact>
            <img src={imageUrlRecources.logo} alt={titleList.home} title={titleList.home} />
          </NavLink>
        </div>
        <div className="col-sm-10 col-12">
          <Menu />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
