import React, {FC} from 'react';
import './mainContentWindow.scss'

interface MainProps {
    children: React.ReactChild | React.ReactNode;
}

const MainContentWindow: FC<MainProps> = ({children}) => {
    return (
        <main className="main-content">
            {children}
        </main>
    );
};

export default MainContentWindow;