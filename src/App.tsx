import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import { Homepage } from './components/homepage/homepage'

function App() {


  return (
    <>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
   </Routes>
    </>
  )
}

export default App
