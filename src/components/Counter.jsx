import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice';

function Counter() {
  // 
  const counterValue=useSelector((state)=>state.counter.value)
  const [range,setRange] = useState(1);

  // useDispatch() is a hook used to  call a method in action to update the state
  const dispatch=useDispatch();
  console.log(range);
  
  return (
    <>
    <div className='d-flex align-items-center justify-content-center flex-column w-100'>

        <h2 style={{fontSize:"40px",color:"black"}}>{counterValue}</h2>
        <div className='mt-5'>
            <button className='btn btn-warning p-2' onClick={()=>dispatch(decrement(Number(range)))}>DECREMENT</button>
            <button className='btn btn-success p-2 ms-3' onClick={()=>dispatch(increment(Number(range)))}>INCREMENT</button>
            <button className='btn btn-danger p-2 ms-3' onClick={()=>dispatch(reset())} style={{width:"100px"}}>RESET</button>
        </div>
    </div>

    <div>
      <input type="text" className='form-control mt-4 w-100 ' style={{borderColor:"blue"}} placeholder='Enter the range'
      onChange={(e)=>setRange(e.target.value)} />
    </div>

    
    </>
  )
}

export default Counter