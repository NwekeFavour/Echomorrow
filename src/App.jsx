import { useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/home'
import {Navigate, Route, Routes } from 'react-router-dom'
import AOS from "aos"
import SignIn from './Pages/auth/login'
import About from './Pages/about'
import Contact from './Pages/contact'
import Write from './Pages/write'

function App() {
  const [count, setCount] = useState(0)

 useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/write-a-letter' element={<Write/>}/>
      </Routes>
    </>
  )
}

export default App
