import React, {FC} from 'react';
import classNames from 'classnames';

import './image.scss';
import {IimgProps} from '../../types/types';

const Image: FC<IimgProps> = ({src='', alt='image', className='', circle=false, active, onClick}) => {

    const classes = classNames(className, {circle});

    if (!src) {
        src = 'https://via.placeholder.com/50x50'
    }
    return (
        <img
        src={src}
        alt={alt}
        className={classes}
        onClick={active ? onClick : null}
        />
    );
};

export default Image;