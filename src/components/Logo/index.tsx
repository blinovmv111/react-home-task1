import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../ImageComponent';

import './logo.scss';

const Logo = () => {
    return (
        <Link className="logo" to="/">
            <Image src='icons/logo.svg' className="logo-image"/>
        </Link>
    );
};

export default Logo;