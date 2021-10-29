import React, {FC, useState, useEffect} from 'react';
import BigSlider from "../../components/BigSlider";
import SmallSlider from "../../components/SmallSlider";
import TableReact from '../../components/TableReact';
import fetchTableData from '../../services/getTableData';
import fetchImage from '../../services/getSmallSliderData';
import { IdataTable } from '../../types/types';

import style from './discoverPage.module.scss';

interface DiscoverProps {
    children?: React.ReactNode | React.ReactChild;
}

const DiscoverPage: FC<DiscoverProps> = () => {
    const [dataTable, setDataTable] = useState<IdataTable[] | any>([]);
    const [slideList, setSlideList] = useState<string[]>([]);

    useEffect(() => {
        fetchTableData('http://localhost:3000/mockData')
                .then (res => setDataTable(res))
        ;
        fetchImage('https://dog.ceo/api/breeds/image/random/20')
        .then (res => setSlideList(res))   
    }, []);

    return (
        <>
            <div className={style.upperPartSlider}>
                <BigSlider/>
            </div>
            <div className={style.bottomPart}>
                <SmallSlider slideList={slideList}/>            
                <h3 className={style.titleTable}>Top Tracks</h3>
                 <TableReact dataTable={dataTable}/>
            </div>           
        </>            
    );
};

export default DiscoverPage;