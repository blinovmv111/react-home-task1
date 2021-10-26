import React, {FC, useState} from 'react';

import Image from '../ImageComponent';
import Icon from '../IconsComponent';

import style from './user.module.scss';
import { Iicons } from '../../types/types';


const User: FC = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <div className={style.userBlock}>
                <div className={style.userFoto}>
                    <Image src='images/headerFoto.png' onClick={handleClick} active/>
                    {active ? <Icon name="UserFotoBadge" width="12" height="13" fill="#F51E38"/> : null}                    
                </div>                
                <div className={style.userName}>AF Shinchan</div>
                <div className={style.typeAccount}>
                    <Icon name="crown" fill="#3E2AD1" width="10" height="8"/>
                    <div className={style.typeAccountText}>Premium</div>
                </div>
        </div>
    );
};

export default User;