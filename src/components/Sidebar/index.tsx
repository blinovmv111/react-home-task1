import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from "classnames";
// import cn from "classnames";
// import { useParams } from "react-router";

import './sidebar.scss';

import { pagesSidebar, myTraks, playList } from './asideData.js';
import Image from "../ImageComponent";
import List from "../List";

const Sidebar = () => {
    // const [acitveId, setActiveLink] = useState<null | number>(pagesSidebar[0].id);
    const [visiblePlayList, setVisiblePlayList] = useState(false);

    // const {id}: any = useParams();
    // console.log(id);

    const toggleActiveItem: any = (id: number | null) => {
        
        if(id !== null) {            
            // setActiveLink(id);

        }
    }

    const handleVisiblePlayList = () => {
        setVisiblePlayList(!visiblePlayList);
    }

    return (
        <div className="sidebar">
            <List className="list" data={pagesSidebar} activeProperty/>

            <h3>My Tracks</h3>     
            <List className="list" data={myTraks}/>

            <div className="playlist-head">
                <h3>Playlist</h3>
                <div className="playlist-head__icon">
                    <Image src="icons/Sidebar/Plus.svg" handleClick={handleVisiblePlayList}/>
                </div>
            </div>
            
            <List className={cn('list', 'list-hidden', {visible: visiblePlayList})} data={playList}/>
        </div>
    );
};

export default Sidebar;