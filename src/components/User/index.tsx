import React, {FC, useState} from 'react';

import Image from '../ImageComponent';
import Icon from '../IconsComponent';

import './user.scss';


const User: FC = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <div className="user-block">
                <div className="user-foto">
                    <Image src='icons/Header/headerFoto.png' onClick={handleClick} active/>
                    {active ? <Icon name="UserFotoBadge" width="12" height="13" fill="#F51E38"/> : null}                    
                </div>                
                <div className="user-name">AF Shinchan</div>
                <div className="type-account">
                    <Image src='icons/Header/headerCrown.svg'/>
                    <div className="type-account__text">Premium</div>
                </div>
        </div>
    );
};

export default User;