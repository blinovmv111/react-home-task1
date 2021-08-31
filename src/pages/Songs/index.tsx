import React from 'react';
import { useHistory } from 'react-router-dom';

import './songsPage.scss'

const SongsPage = () => {
    const history = useHistory();
    return (
        <div className="songs-page">
            <h2>Songs Page</h2>
            <button onClick={() => history.push('/')}>Back to Discover</button>
        </div>
    );
};

export default SongsPage;