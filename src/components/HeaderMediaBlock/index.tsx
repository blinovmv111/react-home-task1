import React, {FC} from 'react';

import classNames from 'classnames';

import style from './headerMediaBlock.module.scss';

interface HeaderMediaBlockProps {
    className?: string,
    id: number
    onBlockClick: (id: number) => void
}

const HeaderMediaBlock: FC<HeaderMediaBlockProps> = ({
    children,
    className,
    id,
    onBlockClick
 }) => {

    const classes = classNames(
        style.headerPanelBlock,
        className
    );

    const onBlockClickAction = () => {
        onBlockClick(id);
    }   

    return (
        <div className={classes} onClick={onBlockClickAction} role="document">
           {children}
        </div>
    );
};

export default HeaderMediaBlock;