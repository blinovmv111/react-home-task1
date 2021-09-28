import React, {useState, useEffect} from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import './list.scss'
import Image from '../ImageComponent';

interface Item extends RouteComponentProps<any> {
    className: string,
    data: {id: number,
        icon: string,
        path?: string | undefined,
        name: string
    }[],
    activeProperty?: boolean | undefined
}


const List = (props: Item) => {
    const pathName = document.location.pathname;

    const [activeItem, setActiveItem] = useState<null | string>(pathName);

    useEffect(() => {
        setActiveItem(pathName)
    }, [pathName])

    const onClickAction = (path: string) => {
        setActiveItem(path)
    }
  
    return (
        <ul className={props.className}>
            {
                props.data.map(({id, icon, name, path=''}) => {
                    const a = icon.slice(0, -4);
                    const b = "Active.svg";
                    const c = a + b;
                    return (                        
                        <li onClick={() => onClickAction(path)} key={id} className={path === activeItem && props.activeProperty ? 'active' : ''}>
                            <Link to={path}>
                                <span>
                                    <Image src={path === activeItem && props.activeProperty ? c : icon} alt="icon" />
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