import React from 'react'

function Learning() {
    let arr=[1,2,3,4,5,6,7,8,9,10];
  return (
    <>
     <h1 className='text-2xl font-bold mb-4'>Learning Component</h1>
     <div className="education flex gap-3 flex-wrap bg-gray-100 p-3 rounded-lg">
        {arr.map((item)=>((<div key={item}>
            <h3>card</h3>
            <span>Learning Video {item}</span>
            </div>)))
        }
     </div>
    </>
  )
}

export default Learning