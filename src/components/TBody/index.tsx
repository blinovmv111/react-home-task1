import React, {useState} from 'react';
import TRow from '../TRow';

import './tbody.scss';

const TBody = (props: any) => {
    
    const [activeRow, setActiveRow] = useState<null | number>(null);

    const rowClick: any = (rowNumber: number) => {
        if(rowNumber !== null) {            
            setActiveRow(rowNumber);
        }
    }

    return (
        <tbody>
             {props.rows.map((row: any, index: any) => <TRow rowIndex={index} key={row.time} row={row} activeRow={activeRow} 
             handleClick={rowClick}/>)}
        </tbody>
    );
};

export default TBody;