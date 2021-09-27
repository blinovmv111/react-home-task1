import React, {FC} from 'react';
import './wrapperContent.scss';

interface WrapperProps {
    children: React.ReactChild | React.ReactNode;
}

const WrapperContent: FC<WrapperProps> = ({children}) => {
    return (
        <>
        <div className="wrapper-content">
            {children}
        </div>
        </>
    );
};

export default WrapperContent;