import React from 'react';
import './navbar.scss';

import TV from '../../icons/navBarTV.svg';
import Radio from '../../icons/navBarRadio.svg';
import Bell from '../../icons/navBarBell.svg';
import Search from '../../icons/navBarSearch.svg';
import userFoto from '../../icons/navBarFoto.png';
import Crown from '../../icons/navBarCrown.svg';

const Navbar = () => {
    return (
        <div className="nav-panel">
            <div className="nav-panel__search-block">
                <div className="custom-input">
                    <img src={Search} alt="img" />
                    <input type="text" placeholder="Search your entertainment"/>                   
                </div>
            </div>
            <div className="nav-panel__tv-block">
                <img src={TV} alt="img"/>
            </div>
            <div className="nav-panel__radio-block">
                <img src={Radio} alt="img"/>
            </div>
            <div className="nav-panel__bell-block">
                <img src={Bell} alt="img"/>
            </div>
            <div className="nav-panel__user-block">
                <img src={userFoto} alt="img"/>
                <div className="user-name">AF Shinchan</div>
                <div className="type-account">
                    <img src={Crown} alt="icon" className="type-account__icon" />
                    <div className="type-account__text">Premium</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;