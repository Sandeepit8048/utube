import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Music from './Music'
import Apicart from './Apicart';
function Nabar() {
  return (

   <div className="nab flex gap-5 bg-gray-200 p-3 rounded-lg mb-4 flex-wrap justify-center text-lg font-medium">
     
      <Music/>
      <Apicart/>

     
   </div>

  )
}

export default Nabar;