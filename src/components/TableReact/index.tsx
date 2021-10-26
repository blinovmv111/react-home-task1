import React, {useMemo, useState, useEffect} from 'react';
import classNames from 'classnames';
import { useTable } from 'react-table';
import axios from 'axios';
// import MOCK_DATA from './MOCK_DATA.json';
import COLUMNS from './columns.jsx';
import { IdataTable } from '../../types/types';

import style from "./table.module.scss";
import Icon from '../IconsComponent';

const BasicTable = () => {

    const [activeRow, setActiveRow] = useState<null | string>(null)
    const [dataTable, setDataTable] = useState<IdataTable[]>([])

    async function fetchTableData(url: string, setState: any) {
        try {
            const response = await axios.get<IdataTable[]>(url);
            setState(response.data);
        } catch (e) {
                alert(e);
        }
    }

    useEffect(() => {
        fetchTableData('http://localhost:3000/mockData', setDataTable);
    }, []);

    console.log(dataTable);

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