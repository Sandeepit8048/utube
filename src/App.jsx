import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabar from './Component/Nabar.jsx'
import Music from './Component/Music.jsx'
import Learning from './Component/Learning.jsx'
import Time from './Component/Time.jsx'
import Expend from './Component/Expend.jsx'
function App() {


  return (
  <>
    <Expend />
    <Nabar />
    <Music />
    <Learning />
    <Time />
  </>
  )
}

export default App
