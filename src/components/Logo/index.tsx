import React from 'react';
import LogoIcon from '../../icons/logo.svg';

import './logo.scss';

const Logo = () => {
    return (
        <div className="logo">
            <img src={LogoIcon} alt="logo" />
        </div>
    );
};

export default Logo;