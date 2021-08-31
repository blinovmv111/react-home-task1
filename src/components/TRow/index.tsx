import React from 'react';
import Voice from '../../icons/voice-recorder-table.svg';


const TRow = (props: any) => {

    return (
        <tr onClick={() => props.handleClick(props.rowIndex)} className={props.activeRow === props.rowIndex ? 'active' : ''}>
            {
                (props.activeRow === props.rowIndex ? <td key={0}><img src={Voice} alt="icon"/></td> : <td key={0}>{props.rowIndex + 1}</td>)
            }
           {
               Object.keys(props.row).map((cell: string, ndx: number) => {
                   if(cell === "like") return <td key={ndx}><img src={props.row[cell]} alt="img"/></td>                   
                   if(cell === "option") return <td key={ndx}><img src={props.row[cell]} alt="img"/></td>
                   if(cell === "share") return <td key={ndx}><img src={props.row[cell]} alt="img"/></td>
                   if(cell === "dots") return <td key={ndx}><img src={props.row[cell]} alt="img"/></td>
                   else {
                    return <td key={ndx}>{props.row[cell]}</td>
                   }                   
               })
           }
        </tr>
    );
};

export default TRow;    