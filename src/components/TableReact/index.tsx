import React, {useMemo, useState, useEffect} from 'react';
import classNames from 'classnames';
import { useTable } from 'react-table';
import COLUMNS from './columns.jsx';

import style from "./table.module.scss";
import Icon from '../IconsComponent';

const BasicTable = ({dataTable}:any) => {
    const [activeRow, setActiveRow] = useState<null | string>(null)

    const rowClick: any = (id: string) => {
        if(id !== null) {
            setActiveRow(id);
        }
    }

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => dataTable, [dataTable])

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
        // @ts-ignore
        columns,
        data
    })

    return (
        <table {...getTableProps()} className={style.tableTracks}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} className={style.tableRow}>
                            {
                                headerGroup.headers.map(column => (                                                     
                                    <th {...column.getHeaderProps()} className={style[column.id]}>{column.render('Header')}</th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()} className={style.tableTracksBody}>
                {
                    rows.map(row => {
                        prepareRow(row);
                        return (                            
                            <tr {...row.getRowProps()} onClick={() => rowClick(row.id)} className={classNames(style.tableRow, row.id === activeRow ? style.active : '') }>
                                {
                                    row.cells.map(cell => {                                                          
                                       return (
                                        row.id === activeRow && cell.column.Header === "#" ? <td {...cell.getCellProps()}><Icon name="voice-recorder-table" fill="#3E2AD1" width="14" height="10"/></td> :                  
                                       <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default BasicTable;