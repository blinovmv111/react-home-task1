import React from 'react';

import Image from '../ImageComponent';


const TRow = (props: any) => {

    const generateKey = (pre: any) => {
        return `${ pre }_${ new Date().getTime() }`;
    }
    return (
        <tr onClick={() => props.handleClick(props.rowIndex)} className={props.activeRow === props.rowIndex ? 'active' : ''}>
            {
                (props.activeRow === props.rowIndex ? <td key={0}><Image src="icons/Table/voice-recorder-table.svg"/></td> : <td key={0}>{props.rowIndex + 1}</td>)
            }
           {
               Object.keys(props.row).map((cell: string, ndx: number) => {
                   if(cell === "like") return <td key={generateKey(ndx)}><img src={props.row[cell]} alt="img"/></td>                   
                   if(cell === "option") return <td key={generateKey(ndx)}><img src={props.row[cell]} alt="img"/></td>
                   if(cell === "share") return <td key={generateKey(ndx)}><img src={props.row[cell]} alt="img"/></td>
                   if(cell === "dots") return <td key={generateKey(ndx)}><img src={props.row[cell]} alt="img"/></td>
                   return <td key={generateKey(ndx)}>{props.row[cell]}</td>                
               })
           }
        </tr>
    );
};

export default TRow;    