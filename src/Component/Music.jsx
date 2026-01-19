import React from 'react'

function Music() {
    let arr=[1,2,3,4,5];
  return (
   <>
    <h1>Music Component</h1>
    <div className="flex gap-3 flex-wrap bg-gray-100 p-3 rounded-lg">
    {arr.map((item) => (
        <div key={item}>
          <h3>card</h3>
          <span>Music Video {item}</span>
        </div>
     ))}
    </div>
   </>
  )
}

export default Music