import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './sidebar.scss';

import { pagesSidebar, myTraks, playList } from '../../asideData';
import Plus from "../../icons/Plus.svg";

interface Item {
    id?: number,
    icon: string,
    path: string,
    name: string
}

const Sidebar = () => {
    const [acitveId, setActiveLink] = useState<null | number>(null);

    const handleClick: any = (id: number | null) => {
        if(id !== null) {            
            setActiveLink(id);
        }
    }

    return (
        <div className="sidebar">
            <ul className="sidebar__top">
                {
                pagesSidebar.map((item: Item) => {
                    return (
                        <li key={item.id} onClick={() => handleClick(item.id)} className={item.id === acitveId ? 'active' : ''}>
                            <div>                            
                                <img src={item.icon} alt="icon" />
                            </div>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    )                    
                    })
                }
            </ul>
            <h3>My Tracks</h3>     
            <ul className="sidebar__middle">
                {
                myTraks.map(item => {
                    return (
                        <li key={item.id}>
                            <div>                            
                                <img src={item.icon} alt="icon" />
                            </div>
                            <a href="#">{item.name}</a>
                        </li>
                    )                    
                    })
                }
            </ul>
            <div className="playlist-head">
                <h3>Playlist</h3>
                <div className="playlist-head__icon">                            
                    <img src={Plus} alt="icon" />
                </div>
            </div>
            <ul className="sidebar__bottom">
                {
                playList.map(item => {
                    return (
                        <li key={item.id}>
                            <div>                            
                                <img src={item.icon} alt="icon" />
                            </div>
                            <a href="#">{item.name}</a>
                        </li>
                    )                    
                    })
                }
            </ul>  
        </div>
    );
};

export default Sidebar;