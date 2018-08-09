﻿import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../global/Menu';
import ActiveLink from '../hoc/ActiveLink';
import { globalRecources, imageUrlRecources } from '../../recources';

const Header = () => (
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-2 d-none d-sm-block">
                    <div id="logo" className="main-logo">
                        <NavLink to="/" exact>
                            <img src={imageUrlRecources.logo} alt="" title="" />
                        </NavLink>
                    </div>
                </div>
                <div className="col-sm-10 col-12">
                    <div className="registration">
                        <div className="auth">
                            <ActiveLink to="/" >{globalRecources.enter}</ActiveLink>
                            <ActiveLink to="/register" >{globalRecources.registr}</ActiveLink>
                        </div>
                    </div>
                    <Menu />
                </div>
            </div>
        </div>
    </header>
);
export default Header;