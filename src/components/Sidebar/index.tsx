import React, {useState, useEffect} from 'react';
import classNames from "classnames";
import axios from 'axios';

import style from './sidebar.module.scss';

import Icon from '../IconsComponent';
import List from "../List";
import { IitemSidebar } from '../../types/types';

const Sidebar = () => {
    const [visiblePlayList, setVisiblePlayList] = useState(false);
    const [pagesSidebar, setPagesSidebar] = useState<IitemSidebar[]>([]);
    const [myTraks, setMyTraks] = useState<IitemSidebar[]>([]);
    const [playList, setPlayList] = useState<IitemSidebar[]>([]);

    // const [listSidebar, setListSidebar] = useState({});

    
    async function fetchIcons(url: string, setState: any) {
        try {
            const response = await axios.get<IitemSidebar[]>(url);
            setState(response.data);
        } catch (e) {
            alert(e)
        }
    }

    // const writeStateSidebar = function(key: string, arr: []) {
    //     const newState = {...listSidebar, [key]: arr};
    //     setListSidebar(newState);
    // }

    useEffect(() => {
        fetchIcons('http://localhost:3000/pagesSidebar', setPagesSidebar);
        fetchIcons('http://localhost:3000/myTraks', setMyTraks);
        fetchIcons('http://localhost:3000/playList', setPlayList);
    }, []);

    const handleVisiblePlayList = () => {
        setVisiblePlayList(!visiblePlayList);
    }

    return (
        <div className={style.sidebar}>
            <List className="list" data={pagesSidebar} activeProperty/>

            <h3 className={classNames(style.headSidebar, style.myTraks)}>My Tracks</h3>     
            <List className="list list-my-tracks" data={myTraks}/>

            <div className={style.playlistHead}>
                <h3 className={classNames(style.headSidebar, style.playlist)}>Playlist</h3>
                <div className={style.plusIconWrapper}>
                    <Icon name="plus" fill="#3F4B5E" width="12" height="12" onClick={handleVisiblePlayList} pointer="pointer"/>
                </div>                
            </div>
            
            <List className={classNames('list', style.listHidden, {[style.visible]: visiblePlayList})} data={playList}/>
        </div>
    );
};

export default Sidebar;