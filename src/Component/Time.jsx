import React, { useRef, useState  } from 'react'

function Time() {
     const[Time, setTime]=useState(0);
    let useintervel = useRef(null);
     
       function start(){
        if (useintervel.current) return;

          useintervel.current =  setInterval(()=>{
               setTime((e)=> e+1)
          },1000)
       
    }

    function stop(){
        
           clearInterval(useintervel.current)
             useintervel.current=null;
 
    }

  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Time Zone</h1>
        <h2 id='time' className="text-xl font-semibold mb-4">{Time}</h2>
         <button  onClick={start} >Start</button>
            <button onClick={stop} >Stop</button>
            <button >Reset</button>
    </div>
  )
}

export default Time