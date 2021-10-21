import React, {useState, useEffect} from 'react';
import classNames from "classnames";
import axios from 'axios';

import './sidebar.scss';

import Icon from '../IconsComponent';
import List from "../List";
import { IitemSidebar } from '../../types/types';

const Sidebar = () => {
    const [visiblePlayList, setVisiblePlayList] = useState(false);
    const [pagesSidebar, setPagesSidebar] = useState<IitemSidebar[]>([]);
    const [myTraks, setMyTraks] = useState<IitemSidebar[]>([]);
    const [playList, setPlayList] = useState<IitemSidebar[]>([]);

    
    async function fetchIcons(url: string, setState: any) {
        try {
            const response = await axios.get<IitemSidebar[]>(url);
            setState(response.data);
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        fetchIcons('http://localhost:3000/pagesSidebar', setPagesSidebar);
        fetchIcons('http://localhost:3000/myTraks', setMyTraks);
        fetchIcons('http://localhost:3000/playList', setPlayList);
    }, []);

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
                    <Icon name="plus" fill="#3F4B5E" width="12" height="12" onClick={handleVisiblePlayList} pointer="pointer"/>
                </div>
            </div>
            
            <List className={classNames('list', 'list-hidden', {visible: visiblePlayList})} data={playList}/>
        </div>
    );
};

export default Sidebar;