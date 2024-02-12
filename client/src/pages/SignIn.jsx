
import { useState } from 'react';
import '../index.css';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
      e.target.className = 'border-sky-600 border-2 p-3 rounded-lg';
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

  const border = (e) => {
    e => e.target.classList.add(border - amber - 300)
  }
  console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className="text-3xl text-center font-semibold my-7">Sign in</h1>
      <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="email" placeholder='email' className='border-none  p-3 rounded-lg' id='email' onChange={handleChange} onClick={border}/>
        <input type="password" placeholder='password' className='border-none p-3 rounded-lg' maxlength="8" id='password' onChange={handleChange} onClick={border} />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 mt-5'>Sign in</button>
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










