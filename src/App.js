import './App.css';
import {useState } from 'react';
import CalForm from './CalForm';
const App = () => {
 
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [result,setResult] = useState('');


  const add = () => {
    console.log("add")
    const res=Number(inputValue1)+Number(inputValue2);
  setResult(res);
  };

  const subtract = () => {
    console.log("sub")
    const res=Number(inputValue1)-Number(inputValue2);
    setResult(res);
  };

  const multi = () => {
    console.log("multiply")
    const res=Number(inputValue1)*Number(inputValue2);
    setResult(res);
  };

  const divide = () => {
    console.log("divide")
    const res=Number(inputValue1)/Number(inputValue2);
    setResult(res);
  };

  const mod = () => {
    console.log("mod")
    const res=Number(inputValue1)%Number(inputValue2);
    setResult(res);
  };


  const operandList=[{
    symbol:'+',
    method: add,
  },
  {
    symbol:'-',
    method: subtract,
  },
  {
    symbol:'*',
    method: multi,
  },
  {
    symbol:'/',
    method: divide,
  },
  {
    symbol:'%',
    method: mod,
  },];


  return (
    <>
     <div className='container text-center'>
    <h5 className="text-center" >Calculator</h5>
        <CalForm
          inputValue1={inputValue1}
          inputValue2={inputValue2}
          setInputValue1={setInputValue1}
          setInputValue2={setInputValue2}
          operandList={operandList}
        />
        <br/>
        <div className="res">
        <h5>{result}</h5>
        </div>
      </div>
    </>
  );
};

export default App;