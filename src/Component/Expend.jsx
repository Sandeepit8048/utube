import React from 'react'
import { useState } from 'react';
function Expend() {
    const [iteam, setIitem] = useState([]); 
    const [text, setText] = useState("");

    const  changetxt =(event)=>{
        setText(event.target.value);
    }

    const submitbtn =(event)=>{
        event.preventDefault();
        setIitem([...iteam, text]);
        console.log(iteam);
       
        setIitem("");
        setText(" ");

    }
  return (
    <form action="" onSubmit={submitbtn}>
        <input type="text" value={text}  onChange={changetxt}/>
        <button  >Add</button>
    </form>
  )
}

export default Expend