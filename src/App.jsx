import React from 'react'
import Box from './pages/Box'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Card from './components/Card'
import Main from './components/Main'
import Video from './components/Video'
import Message from './components/Message'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Box />} index/>
        <Route path='/card' element={<Card />}/>
        <Route path='/main' element={<Main />}/>
        <Route path='/video' element={<Video />}/>
        <Route path='/message' element={<Message />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App