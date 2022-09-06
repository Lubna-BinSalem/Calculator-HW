import React from 'react';
import './App.css';


const Arithmetic =({operandList})=>{
    return(
        <div className="container">
            {operandList.map((op,index)=>{
                return (
                    <button key={index} onClick={op.method} className='btn btn-secondary' type='button'>{op.symbol}</button> )
            })}
        </div>
    )
}

export default Arithmetic;
