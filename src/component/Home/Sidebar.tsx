import React from 'react';
import { Link } from 'react-router-dom';
export const Sidebar:React.FC=()=>{
    return(
        <nav className='sidebar'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Profile'>Profile</Link></li>
                <li ><Link to='/Settings'>settings</Link></li>
                <li ><Link to='/Calculator'>Calculator</Link></li>
                <li ><Link to='/addItems'>AddUsers</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/qa1'>QA1</Link></li>
                <li><Link to='/qa2'>QA2</Link></li>
                <li><Link to='/autocompletes'>Select fav movie</Link></li>
                <li><Link to='/myform'>MyForm</Link></li>
                <li><Link to='/useReducerCalculation'>Calculator2</Link></li>
            </ul>
        </nav>
    )
}