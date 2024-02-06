import React from 'react'

export default function Todo(props) {
  
  
  return (
    <div>
      <h1 className='text-center my-4'>Todo list</h1>
      <div className='container my-2 bgtodo'>
        {props.tolist.length===0? <h3>Nothing Todo!!!!</h3>:""}
        {props.tolist.map((e)=>{
          return <>
          <hr/>
          
          <h4>{e.title}</h4>
          <p>{e.desc}</p>
          <button className='btn btn-danger' onClick={()=>{
            {props.ondelete(e)}
          }}>Delete</button>
          <hr/>
          </>
        })}
      </div>
      
    </div>
  )
}
