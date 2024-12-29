import React from 'react'
import { StatWidget2 } from './StatWidget2';
export const StatsSection:React.FC=()=>{
    return (
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <StatWidget2 title="Users" value={'100'} description="Total registered users" />
          <StatWidget2 title="Sales" value={'250'} description="Sales this month" />
          <StatWidget2 title="Orders" value={'300'} description="Orders processed" />
        </div>
      );
}