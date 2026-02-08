import React, { useRef, useState } from 'react'

function Time() {
  const [time , setTime] = useState(1);// t-2
  const [updata, setUpdata ] = useState(2) //3
   let countdt=0;
  function Start(){
     
            setTime(time*updata);//2*3=6
            setUpdata(e=>e+1)
            

     
  }

  function Stop(){
       if(time == 0 ){
        // setTime((e)=>e-1);
        return ;

       }else if(time !=0){
        setTime((e) =>e-1);
       }
  }



  return (

    <div>
    <p>{time}</p>
    <button onClick={Start}>Start</button>
    <button onClick={Stop}>Stop</button>
    </div>
  )
}

export default Time