import React, { useEffect, useRef, useState } from 'react'
import Img from '../assets/got.avif'
import Cart from './Cart'
import './Cartbox.css'
function MovieAPI() {
    const [data , setData] = useState([0]);
    const  chagebgcol = useRef(null);
    const changecolor = useRef(null);
    
    
  useEffect(()=>{
    async function Moviefetch() {
         const dataapi = await fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies");
         const response = await dataapi.json();
            
         setData(response);

        }
        Moviefetch();
        
            
    
    
    
}, [])

function colourChange(){
     chagebgcol.current.style.backgroundColor='red';

}

function colorchange1(){
   changecolor.current.style.backgroundColor='yellow';
}

 


    // console.log(data);

  return (
    < >
        {
            data.map((props,key)=>{
                
                return ( 
                 <Cart key={key} props={props}/>
                   
                )})
        }

        <button  onClick={colourChange}  ref={changecolor}>First Btn</button>
        <button ref={chagebgcol} onClick={colorchange1} >Second btn</button>
    </>
  )
}

export default MovieAPI
