import React, {FC} from 'react';
import BigSlider from "../../components/BigSlider";
import SmallSlider from "../../components/SmallSlider";
import Table from "../../components/Table";

import './discoverPage.scss';

interface DiscoverProps {
    children?: React.ReactNode | React.ReactChild;
}


const DiscoverPage: FC<DiscoverProps> = ({children}) => {
    return (
        <>
            <div className="upperPartSlider">
                <BigSlider/>
            </div>
            <div className="bottomPart">
                <SmallSlider/>            
                <h3 className="title-table">Top Tracks</h3> 
                 <Table/>
            </div>           
        </>            
    );
};

export default DiscoverPage;