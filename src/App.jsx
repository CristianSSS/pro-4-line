import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import GameScreen from './pages/game'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/play' element={<GameScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
