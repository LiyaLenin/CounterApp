import React from 'react'

function Counter() {
  return (
    <div style={{width:'500px'}} className='border rounded p-5  text-center'>
        <h1 style={{fontSize:'100px'}}>10</h1>
<div className='d-flex justify-content-evenly align-items-center mt-5'>
    <button className='btn btn-warning'>Decrement</button>
    <button className='btn btn-danger'>Reset</button>
    <button className='btn btn-success'>Increment</button>

</div>

    </div>
  )
}

export default Counter