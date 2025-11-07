// App.jsx / App.tsx
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Box from './pages/Box'
import Card from './components/Card'
import Main from './components/Main'
import Video from './components/Video'
import Message from './components/Message'

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Box />} />            {/* home */}
        <Route path="card" element={<Card />} />
        <Route path="main" element={<Main />} />
        <Route path="video" element={<Video />} />
        <Route path="message" element={<Message />} />
        {/* optional catch-all */}
        {/* <Route path="*" element={<Box />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
