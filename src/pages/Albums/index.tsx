import React from 'react';
import { useHistory } from 'react-router-dom';

import './albumsPage.scss';

const AlbumPage = () => {
    const history = useHistory();
    return (
        <div className="album-page">
            <h2>Album Page</h2>            
            <button onClick={() => history.push('/')} type="button">Back to Discover</button>
        </div>
    );
};

export default AlbumPage;