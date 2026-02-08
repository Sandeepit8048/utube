import React, { useEffect, useState } from 'react'


function Apicart() {
   const[data , setData]= useState([]);


 useEffect(()=>{
     async function datafetech() {
        
     
           const storedata = await fetch("https://jsonplaceholder.typicode.com/todos/");
            const datares = await storedata.json();
             setData(datares);

            }
            datafetech();
        }, [])
        console.log(data);
        return (
    <>
    
       {/* <p>Hi Api</p> */}
        
        {data.map((item) =>(
           <div  style={{display:'flex'}} >
          
             {/* <p>{item.userId}</p> */}

              <div style={{backgroundColor:'lightpink' , height:'200px' , width:'300px' }}>
                  <h5>ID: {item.id}</h5>
                  <p>UserId: {item.userId}</p><br />
                  <p>Title: {item.title}</p>
                  <p>Complete: {item.completed} </p>

              </div>      
          
            
            
           </div>
        ))}


    </>
  )
}

export default Apicart