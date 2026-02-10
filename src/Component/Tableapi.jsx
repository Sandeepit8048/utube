import React, { useEffect, useRef, useState } from 'react'

function Tableapi(){
    const [data , setData] = useState([]);
    const usereffrace = useRef([]);

    
    
    useEffect(()=>{
        
        async function datafetch(){
           const store = await fetch("https://jsonplaceholder.typicode.com/todos/")
            const responce =  await store.json()
              
            setData(responce);
            console.log(responce);
        }
        
        datafetch();
         
        
    }, [])
    
    useEffect(()=>{
        
        colorchange()
    }, [data])
      
    function  colorchange(){
          const col = ['red', 'green', 'blue', 'orange', 'gray']
           usereffrace.current.forEach((item, i)=>{
             if(item){
                item.style.color = col[i % col.length]
             }
          })
    }
   
   

    
   

     return(
        <>
          <h1>Hi data</h1>
          <table>
            <tbody>
          {
            data.map((item, i)=>{
                return(
                <tr key={item.id} ref={(el)=> usereffrace.current[i]=el}>

                  
                    
                    <td>{item.id}</td>
                    <td>{item.userId} </td>
                    <td>{item.title} </td>
                  </tr>


)
})
}
</tbody>
    
</table>  
        </>
     )
}

 export default Tableapi;

