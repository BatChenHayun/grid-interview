import React from 'react';
import GridRow from './GridRow';

const Grid = ({ config, data, Compo }) => (

  <table>
    <thead>
      <tr>
        {config.map((config,index)=><th key={index}>{config.title}</th>)} 
      </tr>  
    </thead>
    <tbody>
        {data.map((data,index)=><GridRow data={data} config={config} key={index} Compo={Compo} />)}
    </tbody>
  </table>
);

export default Grid;