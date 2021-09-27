import React from 'react';
import THead from '../THead'
import TBody from '../TBody';
import { columns, cellData } from './tableData.js';

import './table.scss';


const Table = () => {

    const columnRenderer = (column:any) => {
        return column.slice(0, 1).toUpperCase() + column.slice(1, column.length);
    }
    return (
        <table>
            <THead columnRenderer={columnRenderer} columns={columns}/>
            <TBody columns={columns} rows={cellData}/>            
        </table>
    );
};

export default Table;