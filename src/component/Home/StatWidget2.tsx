import React from 'react'

interface StatWidget2Props{
    title:string;
    value:string;
    description:string;
}

export const StatWidget2:React.FC<StatWidget2Props>=({title,value,description})=>{
   return( <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', width: '150px' }}>
    <h4>{title}</h4>
    <p>{value}</p>
    <small>{description}</small>
  </div>
   );
}