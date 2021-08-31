import React from 'react';

const THead = (props: any) => {
    return <thead>
            <tr>
                {props.columns.map((col: any) => <th key={col.id} style={col.width}>{props.columnRenderer(col.name)}</th>)}
            </tr>
        </thead>
};

export default THead;