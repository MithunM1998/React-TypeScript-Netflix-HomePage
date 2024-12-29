import React, { useState } from 'react';
// src/components/Calculator.tsx
import './Calculator.css';

export const Calculator:React.FC=()=>{
    const[num1,setnumber]=useState<number | string>('');
    const[num2,setnumber2]=useState<number | string>('');
    const[result,setResult]=useState<number | string>('');

    const handleAddition=()=>{
        setResult(Number(num1)+Number(num2));
    }
    const handleSubtraction=()=>{
        setResult(Number(num1)-Number(num2));
    }
    const handleMultiplication=()=>{
        setResult(Number(num1)*Number(num2));
    }
    const handleDivision=()=>{
        if (Number(num2) === 0) {
            setResult('Error: Division by zero');
          } else {
            setResult(Number(num1) / Number(num2));
          }
    }
    return(
        <div className='calculator'>
            <h1>CalCulator</h1>
            <input
            type='number'
            value={num1}
            onChange={(e)=>setnumber(e.target.value)}
            placeholder='Enter num1'/>

<input
            type='number'
            value={num2}
            onChange={(e)=>setnumber2(e.target.value)}
            placeholder='Enter num2'/>

            <button onClick={handleAddition}>Add</button>
            <button onClick={handleSubtraction}>sub</button>
            <button onClick={handleMultiplication}>mul</button>
            <button onClick={handleDivision}>divide</button>

            <h3>
                Result:{result}
            </h3>
        </div>
    )
}