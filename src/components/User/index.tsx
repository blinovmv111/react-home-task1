import React from 'react';

import Image from '../ImageComponent';

import './user.scss';

interface userProps {
    active?: string
}

const User = (props: userProps) => {
    return (
        <div className="user-block">
                <Image src={props.active ? 'icons/Header/headerFotoActive.png' : 'icons/Header/headerFoto.png'}/>
                <div className="user-name">AF Shinchan</div>
                <div className="type-account">
                    <Image src='icons/Header/headerCrown.svg'/>
                    <div className="type-account__text">Premium</div>
                </div>
        </div>
    );
};

export default User;