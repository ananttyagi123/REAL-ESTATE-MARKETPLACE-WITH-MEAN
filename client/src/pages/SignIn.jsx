
import { useState } from 'react';
import '../pages/index.css'
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../Component/OAuth';
const Signin = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [userFound, setUserFound] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    // Example: applying a class based on condition
    if (e.target.value === '') {
      e.target.className = 'border-red-700 border-4 p-3 rounded-lg';
    } else {
      // Resetting the class if value is not empty
      e.target.className = 'border-amber-700  border-4 p-3 rounded-lg';
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/Signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('Failed to sign in');
      }

      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
      }

      navigate('/');
      console.log(data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  const borderClass = (e) => {
    (e) => e.target.className = 'p-3 rounded-lg'
  }
  console.log(formData);

  // State to check if the user found then its ok but if not found show 
  const handleLogin = () => {
    // Logic to check user credentials (replace this with your actual logic)
    if (username === 'ananttyi@gmail.com' && password === 'shn@221.') {
      // User found
      setUserFound(true);
      // Perform login actions
    } else {
      // User not found
      setUserFound(false);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className="text-3xl text-center font-semibold my-7">Sign in</h1>
      <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="email" placeholder='email' className='border-none  p-3 rounded-lg bg-stone-300' id='email' onChange={handleChange} onClick={borderClass} onAbort={(e) => {
          e.target.className = 'border-sky-700 rounded-lg p-3'
        }} />
        <input type="password" placeholder='password' className='border-none p-3 rounded-lg bg-stone-300' maxLength='14' id='password' onChange={handleChange} onClick={borderClass} />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 mt-[20px]'>Sign in</button>

        {userFound ? null : <p>Wrong Credentials!</p>}
        <OAuth />
      </form>

      <div className="text-slate-900 p-2 mt-4 flex  gap-4">
        <p>Don't Have account?</p>
        <Link to='/Signup'>
          <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
    </div>
  )
}

export default Signin;










