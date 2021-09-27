import React, {FC} from 'react';
import classNames from 'classnames';

import './image.scss';

interface ImgProps{
    src?: string,
    alt?: string,
    circle?: boolean,
    className?: string
    active?: boolean,
    handleClick?: (() => void) | undefined
}

const Image: FC<ImgProps> = ({src='', alt='image', className='', circle=false, active=false, handleClick, ...attrs}) => {

    const classes = classNames(className, {circle});

    if (!src) {
        src = 'https://via.placeholder.com/50x50'
    }
    return (
        <img
        src={src}
        alt={alt}
        className={classes}
        onClick={handleClick}
        />
    );
};

export default Image;