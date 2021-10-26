import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';

import style from './albumsPage.module.scss';

const AlbumPage = () => {
    const history = useHistory();
    return (
        <div className={style.albumPage}>
            <h2 className={style.headerAlbumPage}>Album Page</h2>
            <Button className={style.buttonAlbumPage} onClick={() => history.push('/')}>Back to Discover</Button>
        </div>
    );
};

export default AlbumPage;