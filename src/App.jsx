import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import SignIn from './pages/SignIn.jsx';
import Signout from './pages/Signout.jsx';
import Profile from './pages/Profile.jsx';
import Header from './Component/Header.jsx';


function App() {
  return <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/Signout' element={<Signout />} />
      <Route path='/About' element={<About />} />
      <Route path='/Profile' element={<Profile />} />
    </Routes></BrowserRouter>

}

export default App;
