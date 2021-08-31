import React, {FC} from 'react';
import './mainContentWindow.scss'

interface MainProps {
    children?: React.ReactChild | React.ReactNode;
}

const MainContentWindow: FC<MainProps> = ({children}) => {
    return (
        <div className="main-content">
            {children}
        </div>
    );
};

export default MainContentWindow;