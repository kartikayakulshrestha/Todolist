import React from 'react'
import { useState } from 'react';
import Form from "../components/Form"
export default function Addtodo(props) {
let [showform,setshowform]=useState(0)
const addtodo= (title,desc)=>{
    
    props.addsome(title,desc)
}
return (
    <div>
      <div className='container text-center'>
        {showform ?<Form addtodo={addtodo} />:""}
        <br/>
        <button className='btn btn-success hover-rotate' onClick={()=>{showform===0?setshowform(1):setshowform(0)}} >

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-plus" viewBox="0 0 16 16">
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363 1.591 6.602z"/>
                <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5"/>
            </svg>      Add Task</button>
      </div>
    </div>
  )
}