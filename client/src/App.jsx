import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import SignIn from './pages/SignIn.jsx';
import Signout from './pages/SignOut.jsx';
import Profile from './pages/Profile.jsx';
import Header from './Component/Header.jsx';
import Signup from './pages/Signup.jsx';
import Signin from './pages/SignIn.jsx';


function App() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/SignOut' element={<Signout />} />
      <Route path='/About' element={<About />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Signin' element={<Signin/>}/>
    </Routes></BrowserRouter>

}

export default App;