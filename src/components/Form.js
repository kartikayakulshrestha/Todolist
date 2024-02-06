import React from 'react'
import { useState } from 'react'
export default function Form(props) {
    const[title,settitle]=useState("");
    const[desc,setdesc]=useState("");
    const onAdd=()=>{
        if (title.length===0 || desc.length===0){
            alert("Fill both")
        }
        
        props.addtodo(title,desc)
        
    }
  return (
    <div>
    
    <div className='formAdd'>
    <h3>Write task and Description</h3>
    <form >
    <div className="mb-3">
    <input type="text" className="form-control" onChange={(e) => settitle(e.target.value)} placeholder="Enter The Title of the task"/>
    </div>
    <div className="mb-3">
  
    <textarea className="form-control" onChange={(e)=>setdesc(e.target.value)} placeholder='Enter The Title of the Description'></textarea>
    </div>
    </form>
    <button type='submit' onClick={onAdd} className='btn btn-success'>Add it</button>
    </div>
    </div>
  )
}
