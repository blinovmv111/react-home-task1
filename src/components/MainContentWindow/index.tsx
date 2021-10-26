import React, {FC} from 'react';
import style from './mainContentWindow.module.scss';

const MainContentWindow: FC = ({children}) => {
    return (
        <main className={style.mainContent}>
            {children}
        </main>
    );
};

export default MainContentWindow;