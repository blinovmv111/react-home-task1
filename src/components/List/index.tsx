import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './list.scss'
import Image from '../ImageComponent';

interface Item {
    className: string,
    data: {id: number,
        icon: string,
        path?: string | undefined,
        name: string
    }[],
    activeProperty?: boolean | undefined
}

const List = (props: Item) => {
    const [acitveItem, setActiveItem] = useState<null | number>(props.data[0].id);

    const onClickAction = (id: number) => {
        setActiveItem(id)
    }
  
    return (
        <ul className={props.className}>
            {
                props.data.map(({id, icon, name, path=''}) => {
                    const a = icon.slice(0, -4);
                    const b = "Active.svg";
                    const c = a + b;
                    return (                        
                        <li onClick={() => onClickAction(id)} key={id} className={id === acitveItem && props.activeProperty ? 'active' : ''}>
                            <Link to={path}>
                                <span>
                                    <Image src={id === acitveItem && props.activeProperty ? c : icon} alt="icon" />
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

export default List;