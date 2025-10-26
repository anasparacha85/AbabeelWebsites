import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Services from './pages/Services'
import NotFound from './pages/NotFound'

import Blogs from './pages/Blogs'
import Contact from './pages/ContactUs'
import Career from './pages/Career'

import ScrollToTop from './hooks/ScrolltoTop'
import Testimonials from './pages/Testimonials'
import Aos from 'aos'

import 'aos/dist/aos.css'
import BlogDetailPage from './pages/BlogsDetails'
function App() {
   useEffect(() => {
    Aos.init({
      duration: 1200,   // default duration
      once: true,       // animation runs only once
      offset: 100,      // trigger point
    });
  }, []);
  const [count, setCount] = useState(0)

  return (
    <>
    <ScrollToTop/>
   <Routes>
    <Route path="" element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
      <Route path="/testimonials" element={<Testimonials/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/career' element={<Career/>}/>
           <Route path='/blogs/:slug' element={<BlogDetailPage/>}/>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
    </>
  )
}

export default App
