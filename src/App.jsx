import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import GameScreen from './pages/game'
import { useState } from 'react'
import ConfigGame from './pages/configGame'

export default function App() {

  const [formData, setFormData] = useState({})

  const handlerFormDataUpdate = data =>{
    setFormData(data);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/config' element={<ConfigGame handlerFormData={handlerFormDataUpdate} />} />
          <Route path='/game' element={<GameScreen formData={formData} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
