import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../ImageComponent';

import style from './logo.module.scss';
// import Icon from '../IconsComponent';


const Logo = () => {
    return (
        <Link className={style.logo} to="/">
            <Image src='icons/logo.svg' className={style.logoImage}/>
            {/* <Icon name="logo" width="89" height="34"/> */}
        </Link>
    );
};

export default Logo;