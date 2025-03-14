// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blogs } from './pages/Blogs'
import { Blog } from './pages/Blog'
import { Publish } from './pages/Publish'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup></Signup>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/blog/:id" element={<Blog></Blog>}></Route>
          <Route path="/publish" element={<Publish></Publish>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
