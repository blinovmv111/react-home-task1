import React, {FC} from 'react';
import BigSlider from "../../components/BigSlider";
import SmallSlider from "../../components/SmallSlider";
// import Table from "../../components/Table";
import TableReact from '../../components/TableReact';

import style from './discoverPage.module.scss';

interface DiscoverProps {
    children?: React.ReactNode | React.ReactChild;
}


const DiscoverPage: FC<DiscoverProps> = () => {
    return (
        <>
            <div className={style.upperPartSlider}>
                <BigSlider/>
            </div>
            <div className={style.bottomPart}>
                <SmallSlider/>            
                <h3 className={style.titleTable}>Top Tracks</h3>
                 <TableReact/>
            </div>           
        </>            
    );
};

export default DiscoverPage;