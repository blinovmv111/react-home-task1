import React, {useState, useEffect} from 'react';
import classNames from "classnames";
import axios from 'axios';

import style from './sidebar.module.scss';

import Icon from '../IconsComponent';
import List from "../List";
import { IitemSidebar } from '../../types/types';

const Sidebar = () => {
    const [visiblePlayList, setVisiblePlayList] = useState(false);
    const initState = {pagesSidebar: [], myTraks: [], playList: []}
    const [listSidebar, setListSidebar] = useState(initState);

    const writeStateSidebar = function(arr: [][]) {     
        setListSidebar({pagesSidebar: arr[0], myTraks: arr[1], playList: arr[2]});

    }

    useEffect(() => {
        const paths = ['pagesSidebar', 'myTraks', 'playList'];
        const requests = paths.map(path => fetch(`http://localhost:3000/${path}`));
        Promise.all(requests)      
            .then(responses => Promise.all(responses.map(r => r.json())))
            .then(arrs => writeStateSidebar(arrs))
    }, []);

    async function fetchIcons(url: string, setState: any) {
        try {
            const response = await axios.get<IitemSidebar[]>(url);
            setState(response.data);
        } catch (e) {
            alert(e)
        }
    }

    const handleVisiblePlayList = () => {
        setVisiblePlayList(!visiblePlayList);
    }

    return (
        <div className={style.sidebar}>
            <List className="list" data={listSidebar.pagesSidebar} activeProperty/>

            <h3 className={classNames(style.headSidebar, style.myTraks)}>My Tracks</h3>     
            <List className="list list-my-tracks" data={listSidebar.myTraks}/>

            <div className={style.playlistHead}>
                <h3 className={classNames(style.headSidebar, style.playlist)}>Playlist</h3>
                <div className={style.plusIconWrapper}>
                    <Icon name="plus" fill="#3F4B5E" width="12" height="12" onClick={handleVisiblePlayList} pointer="pointer"/>
                </div>                
            </div>
            
            <List className={classNames('list', style.listHidden, {[style.visible]: visiblePlayList})} data={listSidebar.playList}/>
        </div>
    );
};

export default Sidebar;