import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import axios from 'axios';

import style from './header.module.scss';

import { Iicons } from '../../types/types';

import User from '../User';
import HeaderMediaBlock from '../HeaderMediaBlock';
import Input from '../Input';
import Icon from '../IconsComponent';


interface ImediaBlockProps extends Iicons {
    id: number,       
    nameBadge: string,
    fillBadge: string,
    strokeBadge: string,
    widthBadge: string,
    heightBadge: string,
}

const Header = () => {
    const [icons, setIcons] = useState<ImediaBlockProps[]>([])

    const toggleActiveBlock = (idBlock: number) => { 
        setIcons(icons.map(({id, active, ...rest}) => {
            if (id === idBlock) {
                active = !active                      
            } return {
                id,
                active,
                ...rest
            }
     } ))
    }

    async function fetchMediaIcons() {
        try {
            const response = await axios.get<ImediaBlockProps[]>('http://localhost:3000/icons');
            setIcons(response.data);
        } catch (e) {
            alert(e);
        }
    }

    useEffect(() => {
        fetchMediaIcons()
    }, [])


    return (
        <header className={style.headerPanel}>
            <div className={style.searchBlock}>
                <Input type="text" className={style.inputSearch} name="searchText" placeholder="Search your entertainment"/>
            </div>
            {
                icons.map(({id, name, className, width, height, fill, opacity, nameBadge, fillBadge, strokeBadge, widthBadge, heightBadge, active}) => {
                    return (
                        <HeaderMediaBlock 
                            className={classNames(className, active ? 'active' : '')}
                            onBlockClick={toggleActiveBlock}
                            id={id}
                            key={id}
                            >
                                <Icon name={name} fill={fill} opacity={opacity} width={width} height={height} pointer="pointer"/>
                                {active ? <Icon name={nameBadge} fill={fillBadge} stroke={strokeBadge} width={widthBadge} height={heightBadge} className={className}/> : null}
                                
                        </HeaderMediaBlock>
                    )                    
                })
            }
            <User/>
        </header>
    );
};

export default Header;
