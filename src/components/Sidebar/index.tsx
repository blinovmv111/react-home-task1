import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from "classnames";
// import { useParams } from "react-router";

import './sidebar.scss';

import { pagesSidebar, myTraks, playList } from './asideData.js';
import Image from "../ImageComponent";

interface Item {
    id?: number,
    icon: string,
    path: string,
    name: string
}

const Sidebar = () => {
    const [acitveId, setActiveLink] = useState<null | number>(pagesSidebar[0].id);
    const [visiblePlayList, setVisiblePlayList] = useState(false);

    // const {id}: any = useParams();
    // console.log(id);

    const handleClick: any = (id: number | null) => {
        if(id !== null) {            
            setActiveLink(id);
        }
    }

    const handleVisiblePlayList = () => {
        setVisiblePlayList(!visiblePlayList);
    }

    return (
        <div className="sidebar">
            <ul className="sidebar__top">
                {
                pagesSidebar.map(({id, icon, name, path}) => {
                    const a = icon.slice(0, -4);
                    const b = "Active.svg";
                    const c = a + b;
                    return (
                        <li key={id} onClick={() => handleClick(id)} className={id === acitveId ? 'active' : ''}>
                            <Link to={path}>
                                <span>
                                    <Image src={id === acitveId ? c : icon} alt="icon" />
                                </span>                              
                                {name}
                            </Link>
                        </li>
                    )                    
                    })
                }
            </ul>
            <h3>My Tracks</h3>     
            <ul className="sidebar__middle">
                {
                myTraks.map(({id, icon, name}) => {
                    return (
                        <li key={id}>
                            <Link to="#/">
                                <span>
                                    <Image src={icon} alt="icon" />
                                </span>                              
                                {name}
                            </Link>
                        </li>
                    )                    
                    })
                }
            </ul>
            <div className="playlist-head">
                <h3>Playlist</h3>
                <div className="playlist-head__icon">
                    <Image src="icons/Sidebar/Plus.svg" handleClick={handleVisiblePlayList}/>
                </div>
            </div>
            <ul className={classNames('sidebar__bottom', {visible: visiblePlayList})}>
                {
                playList.map(({id, icon, name}) => {
                    return (
                        <li key={id}>
                            <Link to="#/">
                                <span>
                                    <Image src={icon} alt="icon" />
                                </span>                              
                                {name}
                            </Link>
                        </li>
                    )                    
                    })
                }
            </ul>  
        </div>
    );
};

export default Sidebar;