import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Screen/Home'
import Movies from './Screen/Movies'
import TV from './Screen/TV'
import Sports from './Screen/Sports'



function News() {
  return <div className="text-white">News Page</div>
}

function Hubs() {
  return <div className="text-white">Hubs Page</div>
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/news" element={<News />} />
        <Route path="/hubs" element={<Hubs />} />
      </Routes>
    </Router>
  )
}


export default App

