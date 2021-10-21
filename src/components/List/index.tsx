import React, {useState, useEffect} from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import './list.scss'
import Icon from '../IconsComponent';
import {IitemSidebar} from '../../types/types';

interface Item extends RouteComponentProps<any> {
    className: string,
    data: IitemSidebar[],
    activeProperty?: boolean | undefined
}

const List = (props: Item) => {
    const pathName = document.location.pathname;

    const [activeItem, setActiveItem] = useState<null | string>(pathName);

    useEffect(() => {
        setActiveItem(pathName)
    }, [pathName])

    const onClickAction = (pathRoute: string) => {
        setActiveItem(pathRoute)
    }
  
    return (
        <ul className={props.className}>
            {
                props.data.map(({id, name, width, height, fill, opacity, pathRoute=''}) => {
                    return (                        
                        <li onClick={() => onClickAction(pathRoute)} key={id} className={pathRoute === activeItem && props.activeProperty ? 'active' : ''}>
                            <Link to={pathRoute}>
                                <span>                                    
                                    <Icon name={name} fill={pathRoute === activeItem && props.activeProperty ? '#3E2AD1' : fill} opacity={pathRoute === activeItem && props.activeProperty ? '1' : opacity} width={width} height={height} pointer="pointer"/>
                                </span>                              
                                {name}
                            </Link>
                        </li>
                    )
                }
                )
            }
        </ul>
    );
};

export default withRouter(List) ;