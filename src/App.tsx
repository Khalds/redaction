import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Posts } from './pages/Posts'
import { PostDetails } from './pages/PostDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
