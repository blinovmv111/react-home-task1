import React, {FC} from 'react';

import './headerMediaBlock.scss';
import classNames from 'classnames';

interface HeaderMediaBlockProps {
    children: React.ReactChild | React.ReactNode;
    className?: string,
    id: number,
    onBlockClick: (id: number) => void
}

const HeaderMediaBlock: FC<HeaderMediaBlockProps> = ({
    children,
    className,
    id,
    onBlockClick
 }) => {

    const classes = classNames(
        "headerPanelBlock",
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