import React from 'react';

const GridRow=({data, config, Compo})=>(

    <tr>
        {config.map((item,index)=>
        item.component?
        <td key={index}><Compo data={data[item.field]}/></td>:
        <td key={index}>{data[item.field]}</td>
        )}
    </tr>
    )

export default GridRow;