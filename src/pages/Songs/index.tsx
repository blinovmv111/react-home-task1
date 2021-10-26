import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';

import style from './songsPage.module.scss'

const SongsPage = () => {
    const history = useHistory();
    return (
        <div className={style.songsPage}>
            <h2 className={style.headerSongPage}>Songs Page</h2>
            <Button className={style.buttonSongPage} onClick={() => history.push('/')}>Back to Discover</Button>
        </div>
    );
};

export default SongsPage;