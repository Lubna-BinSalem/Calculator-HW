import React from 'react';
import Arithmetic from './Arithmetic';


const CalForm=({inputValue1,inputValue2,setInputValue1,setInputValue2,operandList})=>{
    return(
        <div className='input-group'>
            <input
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
        type='text'
        className='form-control'
        placeholder='First Number'
      />
      <input
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
        type='text'
        className='form-control'
        placeholder='Second Number'
      />


<Arithmetic operandList={operandList}/>



        </div>
    );
}

export default CalForm;