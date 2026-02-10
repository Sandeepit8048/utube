import React, { useEffect, useRef, useState } from 'react'

function Cart({props}) {
      const [data , setData] = useState([]);
       const stylecart = useRef(null);
    
    //   function Storedata(){
         
    //   }
    
    useEffect(()=>{
         
          styleinf();


    }, [])

     
  function styleinf(){
        //  stylecart.current.Style.backgroundColor = 'red';
        

          stylecart.current.style.borderRadius = '1.5rem';
          stylecart.current.style.borderRadiusColor= 'red' ;

        //   stylecart.current.style.boarder-radius === "1.5rem";
          

   }


   
   return (
       <>
         <div className='cart-box'>
            <img src={props.Poster} alt=""  ref={stylecart} />
            <p >Time: {props.Runtime}   </p>
            <p >Movie-Name: {props.Title}</p>
            <p >Year: {props.Year}</p>
        </div>
   </>
  )
}

export default Cart