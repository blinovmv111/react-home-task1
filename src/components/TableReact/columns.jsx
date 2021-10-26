import React from "react";
import Icon from "../IconsComponent";

const COLUMNS = [
    {
        Header: '#',
        accessor: 'id',
        className: 'id-column'
    },
    {
        Header: '',
        accessor: 'empty1',
        Cell: <Icon name="Favourite" fill="#0F1E36" width="15" height="13"/>
    },
    {
        Header: 'Song',
        accessor: 'song' 
    },
    {
        Header: 'Artist',
        accessor: 'artist'
    },
    {
        Header: 'Daily plays',
        accessor: 'dailyPlays'
    },
    {
        Header: 'Time',
        accessor: 'time'
    },
    {
        Header: 'Option',
        accessor: 'option',
        Cell: <Icon name="Download Items" fill="#0F1E36" width="15" height="13"/>
    },
    {
        Header: '',
        accessor: 'empty2',
        Cell: <Icon name="share" fill="#0F1E36" width="15" height="13"/>
    },
    {
        Header: '',
        accessor: 'empty3',
        Cell: <Icon name="ellipsis" fill="#0F1E36" width="10" height="2"/>
    }
]

export default COLUMNS;