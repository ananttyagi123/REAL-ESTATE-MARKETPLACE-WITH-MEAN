import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../pages/index.css'
const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    if (e.target.value === '') {
      e.target.className = 'border-red-700 border-4 p-3 rounded-lg';
    } else {
      // Resetting the class if value is not empty
      e.target.className = 'border-sky-600 border-2 p-3 rounded-lg';
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/Signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    if (data.success === false) {
      setError(data.message);
    }
    navigate('/');
    console.log(data);
  };

  const borderClass = async (e) => {
    e => e.target.className = 'p-3 rounded-lg border-amber-500'
  }

  return (<>
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className="text-3xl text-center font-semibold my-7">Sign up</h1>
      <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type="text"
          placeholder='username'
          className='border-none p-3 rounded-lg bg-solid-300'
          id='username'
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder='email'
          className='border-none p-3 rounded-lg bg-solid-300'
          id='email'
          onChange={handleChange} onClick={borderClass}
        />
        <input type="password" placeholder='password' id='pass' className='border p-3 rounded-lg bg-solid-300' onChange={handleChange} maxLength="8" onClick={borderClass}
        />
        <input type="date" className='p-3 rounded-lg bg-solid-300' id='password' onChange={handleChange} onClick={borderClass} />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 mt-5'>Sing up</button>

      </form>
      <div className="text-slate-900 p-2 mt-4 flex gap-4">
        <p>Have an account?</p>
        <Link to='/SignIn'>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
    </div>
  </>)
};




export default Signup;
